const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// storing all posts created
const posts = {};

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/posts', async (req, res) => {
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;

    posts[id] = {
        id,
        title
    };

    await axios.post('http://event-bus-srv:4005/events', {
        type: 'PostCreated',
        data: {
            id, title
        }
    })

    // 201 status for resource created + post created
    res.status(201).send(posts[id]);
});

app.post('/events', (req, res) => {
    console.log('Recieved Event', req.body.type);

    res.send({ status: 'OK' });
});

app.listen(4000, () => {
    console.log('v2');
    console.log('listening on port 4000.')
})