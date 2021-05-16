const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const getMovies = require('../api/api');

const moviesSchema = require('../models/movies');

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

// Store movies
router.post('/', (req, res) => {
    const movies = getMovies

    return movies.map(item => {
        let movie = new moviesSchema();
        movie.title = title;
        movie.director = director;
        movie.plot = plot;
        movie.poster = poster;
    })


    const { title, director, plot, poster } = req.body;

    movie.save(err => {
        if (err) {
            return res.status(400)
                .send("Something went wrong");
        }

        return res.json({
            success: true
        })
    })
})

module.exports = router;