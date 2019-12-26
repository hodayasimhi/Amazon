/* Mongoose connection using events */
const mongoose = require('mongoose');
const { DB_USER, DB_PASS, DB_HOST } = process.env.DB_USER ? process.env : require('./constants');

const connectionString = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}`;
console.log(connectionString);

const options = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true // To remove
};

mongoose.connect(connectionString, options)
    .then(db => console.log(`MongoDB is initialized & connected to ${db.connection.name}`))
    .catch(err => console.log('Connection Error', err));

module.exports = {
    mongoDbOptions: options,
    mongoDbUrl: connectionString
};