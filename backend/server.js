import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';
import dotenv from 'dotenv';

// initialize
dotenv.config();

const {getTodos, createTodo, updateTodo, deleteTodo} = require('./controllers/todoController.js') ;

// App Config
const app = express();

const port = process.env.PORT || 8000;

const connectionURL = process.env.MONGO_URI;

// Middlewares
// convert to json
app.use(express.json());

app.use(Cors());

// DB Config
mongoose
  .connect(connectionURL)
  .then(() => {
    app.listen(port, () => console.log(`Running on port : ${port}`));
  })
  .catch((err) => console.log(err));

// API Endpoints
// Get Todos
app.get('/todos', getTodos)

// Create a new todo
app.post('/todos', createTodo)

// Update todo
app.put('/todos/:id', updateTodo)

// Delete a todo
app.delete('/todos/:id', deleteTodo)
