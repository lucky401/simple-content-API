require('dotenv').config();

module.exports = {
  app: require('./app'),
  cors: require('./cors'),
  db: require('./db'),
  cdn: require('./cdn'),
  auth: require('./auth'),
};
