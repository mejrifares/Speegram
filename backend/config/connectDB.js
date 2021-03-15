const mongoose = require ('mongoose')

const dotenv = require ('dotenv')
dotenv.config({path: "./config/.env"})

const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("is connected")
    } catch (error) {
        console.log("DB error", error)
    }
}
module.exports = connectDB;