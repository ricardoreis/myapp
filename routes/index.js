var express = require('express');
var router = express.Router();
//var Pusher = require('pusher');

/* GET home page. */
router.get('/', function(req, res, next) {
  var id = req.query.id
  var num1 = 2
  var num2 = 4
  var num3 = num1 + num2

  res.render('index', { title: 'Express', id:num3 });



});

module.exports = router;
