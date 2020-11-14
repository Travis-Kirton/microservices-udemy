 #### Section 2: Mini Microservice App

 ---

 #### Backend

##### Services to Create

- Post Service
  - Create a Post
  - List all Posts
- Comment Service
  - Create a Comment
  - List all comments
  - (Dependent on Post)

##### Setup

- create-react-app setup
- Express-based project for Posts Service
- Express-based project for Comments Service
- service npm dependencies:
  - express, cors, axios, nodemon


##### Post Service

- `GET ('/posts')`
- `POST ('/posts')`


##### Comment Service

- `GET ('/posts/:id/comments')`
  - returns: `{id, [comment1, comment2]}`
- `POST ('/posts/:id/comments')`
  - body of `{content: 'post text'}`

#### Query Service

- `GET ('/posts)`
- `POST ('/events)`
---

#### Frontend

##### Components

- App
  - PostList
    - CommentList
    - CommentCreate
  - PostCreate


##### Design Solutions

- <b>Solution #1</b> - Sync communication
  - have a GET request to Posts Service > gets comments for Post ID
  - (Downside) service dependency, waiting on API calls


- <b>Solution #2</b> - Async communication
  - Have each service (Post, Comment, Query) emit an event to Event Broker
  - Query Service will emit event when Post/Comment created
  - Query Service may have data structure to keep track of posts/comments picked up by Event Bus/Broker


---

#### Event Bus

- Recieve Event to POST /events
- POST to localhost:4000/events
- POST to localhost:4001/events
- POST to localhost:4002/events 



