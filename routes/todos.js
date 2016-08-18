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

router.post('/', (req, res, next) => {
  const todo = new Todo({ task: req.body.task, completed: false });
  todo.save(function (err) {
    if (err){
      res.status(500).send()
    } else {
      res.json(todo);
    }
  })
});

module.exports = router;
