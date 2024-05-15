const express = require('express');
const router = express.Router();
const Card = require("../models/CardsModel.js");

router.post("/new", async (req, res) => {
    const newCard = new Card(req.body);
    await newCard.save();
    res.status(200).send(newCard);

})

router.get("/", async (req, res) => {
    const cards = await Card.find();
    res.send(cards)
})

router.delete("/:id", async (req, res) => {
    const cardToDelete = await Card.findByIdAndDelete({ _id: req.params.id })
    res.status(200)
})

module.exports = router;