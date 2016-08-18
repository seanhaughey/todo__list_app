const mongoose = require('mongoose');

var todoSchema = {
  task: String,
  completed: Boolean,
  userId: String
};

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
