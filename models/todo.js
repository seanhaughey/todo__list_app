const mongoose = require('mongoose');

var todoSchema = {
  task: String,
  completed: { type: Boolean, default: false },
  userId: String
};

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
