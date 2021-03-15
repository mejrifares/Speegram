const mongoose = require ('mongoose')
// const schema = mongoose.Schema

const userShema = mongoose.Schema ({
    name : String,
    email : String,
    password : String,
    bio : String,
    phone : Number 
})

module.exports = User = mongoose.model ('user' , userShema)