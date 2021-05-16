const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(bodyParser.json());
const router = express.Router();

// Available routes
const routes = require("./routes/routes");

const dbUrl = 'mongodb+srv://g:cassandradebugger@movies-db.hxxgl.mongodb.net/movies-db?retryWrites=true&w=majority';

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
});

let db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB");
});

db.on("error", console.error.bind(console, "Failed to connect to MongoDB"));

// for http requests
app.use("/", router);
// app.use("/routes", routes);

app.listen(3001, () => {
    console.log("Server is listening on port 3001!");
});