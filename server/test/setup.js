const {dbConnect, dbClose} = require('../dbConnect');
const mongoose = require('mongoose');

let setup = () => {
    before((done) => {
        dbConnect()
            .once('open', () => done())
            .on('error', (error) => done(error))
    })
    beforeEach((done) => {
        const collectionName = "movies";
        mongoose.connection.db.listCollections({name: collectionName})
            .next((error, collection) => {
                if (collection) {
                    mongoose.connection.db.dropCollection(collectionName)
                        .then(() => done())
                        .catch((err) => done(err))
                } else {
                    done(error)
                }
            })
    })
    after((done) => {
        dbClose()
            .then(() => done())
            .catch((err) => done(err))
    })
}

module.exports = setup;