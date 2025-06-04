const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    id: String,
    name: String,
    done: { type: Boolean, default: false }
})

const taskModel = mongoose.model("task", taskSchema);

module.exports = taskModel
