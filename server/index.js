const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const moviesRouter = require("./routes/routes");
const { dbConnect } = require("./dbConnect");

const app = express();
app.use(cors());
app.use(bodyParser.json());

dbConnect().once("open", () => {
    console.log("Successfully connected to MongoDB");
});

dbConnect().on("error", console.error.bind(console, "Failed to connect to MongoDB. Please try again"));

// for http requests
app.use("/", moviesRouter);

app.listen(3001, () => {
    console.log("Server is listening on port 3001!");
});

module.exports = app
