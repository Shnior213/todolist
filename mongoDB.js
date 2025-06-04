const mongoose = require('mongoose')


const connect = async () => {
    await mongoose.connect(process.env.BASE_URL + 'todolist');
    console.log("Connected to MongoDB")

}

module.exports = { connect }