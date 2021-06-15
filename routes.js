module.exports = (app) => {
  app.get('/cms', (req, res) => {
    res.status(200).json({
      error: false,
      message: 'Bonjour, mon ami',
    });
  });

  app.use('/cms', require('./auth/api'));
  app.use('/cms', require('./content/api'));
};
