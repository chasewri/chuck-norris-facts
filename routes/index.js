var express = require('express');
var router = express.Router();
const request = require('request');

const rootURL = 'https://api.chucknorris.io/jokes/random'


/* GET home page. */
router.get('/', function(req, res, next) {
      res.render('index', { joke: '' });
  })    
router.get('/getJoke', function(req, res, next) {
  const options = {
    url: `${rootURL}`
  }
  request(
    options,
    function(err, response, body) {
      const joke = JSON.parse(body);
      res.render('index', { joke })
  })
});

module.exports = router;
