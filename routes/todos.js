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

router.get('/:todoId', (req, res, next) => {
  Todo.findById(req.params.todoId, function (err, todo) {
    if (err) {
      res.status(500).send();
    } else {
      if (todo) {
        res.json(todo);
      } else {
        res.status(404).send();
      }
    }
  })
});

router.delete('/:todoId', (req, res, next) => {
  Todo.findById(req.params.todoId).remove(function (err) {
    if (err) {
      res.status(500).send();
    } else {
      res.status(204).send();
    }
  })
});

router.put('/:todoId', (req, res, next) => {
  Todo.findByIdAndUpdate(req.params.todoId, {
   $set: {
     task: req.body.task,
     completed: req.body.completed
   }
 }, function (err, todo) {
   if (err) {
     res.status(500).send();
   } else {
     if (todo) {
       Todo.findById(req.params.todoId, function (err, updatedTodo) {
         res.json(updatedTodo);
       })
     } else {
       res.status(404).send();
     }
   }
 })
});

module.exports = router;
