const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const card = new Schema({
    name: String,
    images: {
        small: String,
        large: String,
    },
    artist: String,
    rarity: String,
    number: String,
    set: {
        id: String,
        name: String,
        series: String,
        printedTotal: Number,
        total: Number,
        legalities: {
            unlimited: String,
        },
        ptcgoCode: String,
        releaseDate: String,
        updatedAt: String,
        images: {
            symbol: String,
            logo: String,
        },
    },
    
})

const Card = model("cards", card);

module.exports = Card;