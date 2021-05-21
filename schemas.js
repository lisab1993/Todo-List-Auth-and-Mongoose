const mongoose = require('mongoose')
const { Schema } = mongoose

//create Mongoose schemas for Todo items as well as Users

//Child Schema
const todoSchema = new Schema({
    title: String,
    complete: Boolean
})

//Parent Schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    //Array of subdoccuments
    children: [todoSchema],
    // Single nested subdocuments. Caveat: single nested subdocs only work
    // in mongoose >= 4.2.0
    child: todoSchema
})