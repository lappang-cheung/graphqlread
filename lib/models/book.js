// Required modules
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Book Schema
const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    authorId: {
        type: String,
        required: true
    }
})

// Export module
module.exports = mongoose.model('books', bookSchema)