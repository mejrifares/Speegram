const express = require('express');
const connectDB = require ('./config/connectDB');
const user = require('./routes/user')



const app = express();

app.use(express.json());

connectDB();

app.use('/user', user)

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`the server is running at http://localhost:${port}`)
})