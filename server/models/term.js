const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const searchTermSchema = new Schema({
    search_term: String,
});

module.exports = mongoose.model('terms', searchTermSchema);