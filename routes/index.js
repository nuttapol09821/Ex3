var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ยินดีต้อนรับ' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'ง่าวต๋าย1' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'ง่าวต๋าย1' });
});

module.exports = router;
