const routes = require('express').Router();;
routes.get('/', (req, res) => {
    res.send('Hello World From Fabrice T. Banyingela From South Africa!');
  });

module.exports = routes;

 