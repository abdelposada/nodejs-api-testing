const mongoose = require('mongoose');
const app = require('./src/app');
const { port, mongo } = require('./src/config/config');

const start = () => {
  app.listen(port, () => console.info('Server running on port', port));
};

const connect = () => {
  mongoose.connection
    .on('error', console.error)
    // BUG using recursion
    // eslint-disable-next-line no-unused-vars
    .on('disconnected', connect)
    .once('open', () => {
      console.log('DB connected');
      start();
    });
  return mongoose.connect(mongo.url, mongo.options);
};

connect();
