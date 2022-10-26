const mongoose = require('mongoose');
const todos = require('../dbTodos');

// Get todos list
const getTodos = async (req, res) => {
  try {
    const allTodos = await todos.find({}).sort({ createdAt: -1 });
    res.status(200).send(allTodos);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

// Create a new todo
const createTodo = async (req, res) => {
  const dbTodo = req.body;
  try {
    const newTodo = await todos.create(dbTodo);
    res.status(201).send(newTodo);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Update todo
const updateTodo = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send(`${id} is not valid id`);
    }
    const todoId = { _id: id };
    const update = { completed: true };
    const updateToDo = await todos.findOneAndUpdate(todoId, update);
    res.status(200).send(updateToDo);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Delete todo
const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send(`${id} is not valid id`);
    }
    const todoId = { _id: id };
    const deleteToDo = await todos.findOneAndDelete(todoId);
    if (!deleteToDo) {
      return res.status(400).send(`${updateToDo} is not valid`);
    }
    res.status(200).send(deleteToDo);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
