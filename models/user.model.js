const { timeStamp } = require('console');
const moongose = require('mongoose');


const userModel = new moongose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
},
    {
        timestamps: true
    }
)

const user = moongose.model("User", userModel)

module.exports = user;