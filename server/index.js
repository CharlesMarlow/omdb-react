const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const moviesRouter = require("./routes/routes");

const app = express();
app.use(cors());
app.use(bodyParser.json());
const router = express.Router();

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
app.use("/", moviesRouter);

app.listen(3001, () => {
    console.log("Server is listening on port 3001!");
});
