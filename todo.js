const mongoose = require('mongoose')

//create Mongoose schemas for Todo items as well as Users

const todoSchema = new mongoose.Schema({
    name: String,
    Completion: Boolean
})