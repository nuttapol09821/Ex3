var express = require('express');
var router = express.Router();
var contact = require('../config/database')

/* GET home page. */
router.get('/', function (req, res, next) {
  var query = "Select * from positions";
  contact.query(query, function (console, result) {
    res.json(result);
  })
});

router.get('/about', function (req, res, next) {
  res.render('about', { title: 'ง่าวต๋าย1' });
});

router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'ง่าวต๋าย1' });
});

module.exports = router;
