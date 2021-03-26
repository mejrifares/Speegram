const mongoose = require('mongoose')
// const schema = mongoose.Schema

const userSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    bio: { type: String },
    phone: { type: Number },
    dateNaissance: { type: Date },
    adress: { type: String },
    likers: {
        type:
            [String]
    },
},
    { timestamps: true, })

module.exports = User = mongoose.model('user', userSchema)