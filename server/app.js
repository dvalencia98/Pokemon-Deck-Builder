const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const MONGODB_URI = "mongodb+srv://davalencia66:sFN6Lx9Fdg50MIJW@pokemon.clnczdz.mongodb.net/?retryWrites=true&w=majority&appName=Pokemon"

const cards = require("./controllers/CardsController.js");

const port = 3000;

app.use(express.json());
app.use(cors());

app.use('/cards', cards);

app.get("/", (req, res) => {
    res.send({ message: "Hello" });
})

mongoose.connect(MONGODB_URI).then(() => {
    app.listen(port, () => {
        console.log(`Server Running on ${port}`)
    });
})