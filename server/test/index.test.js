const request = require('supertest');
const app = require('../index');
const {getMoviesFromDb, getMoviesFromApi} = require('../api/api');

describe('API calls', () => {

    describe('Test storage of data coming from external API', () => {
        // setup()
        it('Fetch data from api and store in DB', async (done) => {
            jest.useFakeTimers()
            let data = {
                id: '12345678',
                title: 'los abrazos rotos',
                director: 'Pedro Almodovar',
                plot: 'una pelicula muy bien',
                poster: 'N/A',
                imdbId: '123456',
                runtime: '1:47:54',
                release_date: 'March 24th, 2009',
                actors: 'Penelope Cruz',
                language: 'Spanish',
            };
            try {
                request(app).post('/').send(data)
                    .expect(200)
                    .then((response) => {
                        // console.log('RES', response);

                        expect(response.body).toEqual({ "success": false })
                        done();
                    })
            } catch (err) {
                console.log('ERROR', err);
                done();
            } finally {
                done()
            }
        })
    })
});
