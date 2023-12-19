const mongoose = require('mongoose');

const orderschema = new mongoose.Schema({
    Bookname: {
        type: String,
        required: true,
    },
    Price: {
        type: String, // Change type to Number
        required: true,
    },
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    mobileNumber: {
        type: String,
        required: true,
    },
    pincode: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    proceeded: { type: Boolean, default: false }
});

const orders = mongoose.model("orders", orderschema);

module.exports = orders;
