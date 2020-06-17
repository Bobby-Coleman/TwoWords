const mongoose = require('mongoose')
const Schema = mongoose.Schema

const entrySchema = new Schema({
    wordOne: {
        type: String,
        required: true
    },
    wordTwo: {
        type: String,
        required: true
    }, 
    title: {
        type: String,
        required: true
    },
    entry: {
        type: String,
        required: true
    },  
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Entry', entrySchema)