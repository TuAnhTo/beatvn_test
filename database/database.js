const mongoose =require('mongoose');

const MONGO_DB_HOST = process.env.MONGO_DB_HOST || 'localhost';
const MONGO_DB_PORT = process.env.MONGO_DB_PORT || '27017';
const MONGO_DB_DATABASE = process.env.MONGO_DB_DATABASE || 'dev';

const url = `mongodb://${MONGO_DB_HOST}:${MONGO_DB_PORT}/${MONGO_DB_DATABASE}?authSource=admin`;

module.exports.openConnection = mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Mongodb connected"))
    .catch(err => console.log(err));

mongoose.connection.on("error", function(err) {
    console.log('Failed to connect to DB');
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection to DB disconnected');
});