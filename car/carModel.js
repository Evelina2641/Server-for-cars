const mongoose = require('mongoose')
const validator = require('validator')

let CarSchema = new mongoose.Schema({
    marke: {
        type:String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    year: {
        type: Date,
        required: true
    },
    rida: {
        type: Number,
        required: true
    },
    ridaNuo: {
        type: Number
    },
    ridaIki: {
        type: Number
    },
    metaiNuo: {
        type: Date
    },
    metaiIki: {
        type: Date
    },
    pavaruDeze: {
        type: String,
        required: true,
        match:[/^(automatine|mechanine)$/,"Pavaru deze gali buti tik automatine arba mechanine"]
    }
})

let car = mongoose.model('Car', CarSchema)

module.exports = car