const mongoose  = require('mongoose');
const DB_PASS = require("./config/env");
const dbUrl = `mongodb+srv://g:${DB_PASS}@movies-db.hxxgl.mongodb.net/movies-db?retryWrites=true&w=majority`;

const dbConnect = () => {
    mongoose.connect(dbUrl, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false})
    return mongoose.connection
};

const dbClose = () => {
    return mongoose.disconnect();
}

module.exports = {
    dbConnect,
    dbClose,
}

