const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const { getMoviesFromApi, getMoviesFromDb } = require('../api/api');

const moviesSchema = require('../models/movies');

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

// Store movies
router.post('/', async (req, res) => {
    const movies = await getMoviesFromApi()
    let error = null;

    movies.map(async item => {
        let movie = new moviesSchema(item);

        try {
            await movie.save((err, result) => {
                if (err) {
                    error = err;
                }
            })
        } catch (err) {
            res.status(400)
                .send(err);
        }
    })
    if (error) {
        res.status(400).send(error);
    } else {
        res.status(200).json({
            success: true,
        });
    }
})

// Get movies from DB
router.get("/", async (req, res) => {
    try {
        const { search } = req.query;
        const movies = await getMoviesFromDb(search)
        res.status(200).send(movies);
    } catch (err) {
        res.send(err);
    }
})

module.exports = router;