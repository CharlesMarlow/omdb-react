const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moviesSchema = new Schema({
    id: String,
    title: String,
    director: String,
    plot: String,
    poster: String,
    imdbId: String,
    runtime: String,
    release_date: String,
    actors: String,
    language: String,
});

module.exports = mongoose.model('movies', moviesSchema);