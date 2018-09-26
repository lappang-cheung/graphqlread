// Required components
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Author Schema
const authorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
})

// Export module
module.exports = mongoose.model('authors', authorSchema)