const mongoos = require('mongoose');

const userSchema = mongoos.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1 //유니크!한지
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0 // default값
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

const User = mongoos.model('User',userSchema) //model의 이름 = User, schema = userSchema

module.exports = { User }