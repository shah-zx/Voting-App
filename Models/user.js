// Making a model for user -

const mongoose = require('mongoose');
const personSchema = new mongoose.Schema({
    name: {
        String
    },
    age: {
        Number,
        required : true
    },
    gender: {
        String
    },
    mobile: {
        Number
    },
    email: {
        String,
    },
    aadhar: {
        Number,
        required: true
    }, 
    password : {
        String, 
        required: true
    },
    role: {
        String, 
        enum : ['voter' , 'admin'],
        default : voter
    },
    isVoted: {
        type: Boolean,
        default: false
    }


})

const Person = mongoose.model('Person' , personSchema);
module.exports = Person;