var express = require('express');
var router = express.Router();
var translate = require('google-translate-api');

/* GET home page. */
router.get('/', function(req, res, next) {
  let { word, from, to} = req.query;

  translate(word, {from: from ? from : false, to: to ? to : 'en'}).then(response => {
    console.log(response)
    res.json(response.text)
    //=> false
  }).catch(err => {
    res.json(err);
  });
});

module.exports = router;
