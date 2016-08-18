const mongoose = require('mongoose');

var todoSchema = {
  task: String,
  completed: Boolean,
  userId: String
};

const Todo = monoose.model('Todo', todoSchema);

module.exports = Todo;
