require('dotenv').config()
const mongoose = require('mongoose');



export const ConnectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('DB connected');   
}