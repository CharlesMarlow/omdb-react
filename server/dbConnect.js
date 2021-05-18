const mongoose  = require('mongoose');
const dbUrl = 'mongodb+srv://g:cassandradebugger@movies-db.hxxgl.mongodb.net/movies-db?retryWrites=true&w=majority';

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

