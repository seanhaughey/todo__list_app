var express = require('express');
var router = express.Router();
var Todo = require('../models/todo');

/* GET home page. */
router.get('/', function(req, res, next) {
  Todo.find({}, function (err, todos) {
    if(err) {
      res.status(500).send();
    } else {
      res.json(todos);
    }
  })
});

module.exports = router;
