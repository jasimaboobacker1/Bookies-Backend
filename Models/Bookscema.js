const mongoose = require('mongoose')


const bookschema = new mongoose.Schema({

    bookname: {
        type: String,
        required: false
    },
    author: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: false
    },
    bookImage: {
        type: String,
        required: true
    }

})

const books = mongoose.model("books",bookschema)

module.exports = books