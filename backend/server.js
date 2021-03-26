const express = require('express');
const connectDB = require ('./config/connectDB');
const postuser = require('./routes/postuser');
const user = require('./routes/user')
const isAuth = require ("./mddleware/passportSet")




const app = express();

app.use(express.json());

connectDB();

app.use('/user', user)

app.use ('/postuser',isAuth, postuser )

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`the server is running at http://localhost:${port}`)
})