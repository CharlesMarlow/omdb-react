const axios = require('axios');

const getMovies = () => {
    let movies = [];
    const api = 'http://www.omdbapi.com/?s=space&type=movie&y=2001&apikey=9f01e2ba'
    return axios.get(api, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            console.log(response.data.data.Search);
            movies.push(response.data.data.Search);
            return movies;
        })
        .catch(error => {
            console.log(error);
        });
}

module.exports = {
    getMovies,
}