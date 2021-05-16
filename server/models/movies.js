const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moviesSchema = new Schema({
    title: String,
    director: String,
    plot: String,
    poster: String,
});

module.exports = mongoose.model('movies', moviesSchema);