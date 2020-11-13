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

---

#### Frontend

##### Components

- App
  - PostList
    - CommentList
    - CommentCreate
  - PostCreate





