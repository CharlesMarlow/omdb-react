const axios = require('axios');
const moviesSchema = require('../models/movies');

const getMoviesFromApi = async () => {
    let movies = [];
    const moviesFromDB = await getMoviesFromDb();
    const moviesIds = moviesFromDB.map(item => item.id);
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const SearchApi = 'http://www.omdbapi.com/?s=space&type=movie&y=2001&apikey=9f01e2ba';
    try {
        const response = await axios.get(SearchApi, config);
        for (const movie of response.data.Search) {
            const id = movie.imdbID;

            if (!moviesIds.includes(id)) {
                const idApi = `http://www.omdbapi.com/?i=${id}&plot=short&apikey=9f01e2ba`

                try {
                    const finalResult = await axios.get(idApi, config)
                    movies.push({
                        id: finalResult.data.imdbID,
                        title: finalResult.data.Title,
                        year: finalResult.data.Year,
                        release_date: finalResult.data.Released,
                        director: finalResult.data.Director,
                        plot: finalResult.data.Plot,
                        actors: finalResult.data.Actors,
                        language: finalResult.data.Language,
                        poster: finalResult.data.Poster,
                        runtime: finalResult.data.Runtime,
                    })
                } catch (err) {
                    console.log('ID ERROR', err);
                }
            }
        }
        return movies;
    } catch (err) {
        console.log('ERROR', err);
    }
}

const getMoviesFromDb = async (src = '') => {
    const term = src !== '' ? {
        $or: [
            { "title": { "$regex": src, "$options":'i'} },
            { "director": { "$regex": src,  "$options":'i'} },
            { "plot": { "$regex": src, "$options":'i'} }
        ]
    } : {};
    if (src !== '') {
        return moviesSchema.find(term);
    }
    return moviesSchema.find(term);
}

module.exports = {
    getMoviesFromApi,
    getMoviesFromDb,
}