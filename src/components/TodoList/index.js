import axios from '../../axios';
import React from 'react';
import { Container, Row, Text, DeleteIcon } from './styles';

const TodoList = ({ todos, fetchData }) => {
  console.log(todos);

  // update todo
  const updateTodo = async (id) => {
    try {
      await axios.put(`/todos/${id}`, { id });
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };

  // delete todo
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`/todos/${id}`);
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container>
      {todos?.map((todo) => (
        <Row key={todo._id}>
          <Text
            isCompleted={todo.completed}
            onClick={() => updateTodo(todo._id)}
          >
            {todo.text}
          </Text>
          <DeleteIcon onClick={() => deleteTodo(todo._id)}>x</DeleteIcon>
        </Row>
      ))}
    </Container>
  );
};

export default TodoList;
