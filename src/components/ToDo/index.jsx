import { useEffect, useState } from 'react';
import Form from '../Form';
import { Container, Header } from './styles';
import axios from '../../axios';
import TodoList from '../TodoList';
import Key from '../Key';

const ToDo = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  // Load all todos
  const fetchData = async () => {
    try {
      let response = await axios.get('/todos');
      setTodos(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  // create a new todo
  const addTodo = async (e) => {
    e.preventDefault();
    try {
      if (input.length === 0) return null;
      let sendData = [{ ...todos, text: input, completed: false }];
      await axios.post('/todos', sendData);
      await fetchData();
    } catch (err) {
      console.log(err);
    } finally {
      setInput('');
    }
  };

  const props = {
    input,
    setInput,
    addTodo,
  };

  return (
    <Container>
      <Header>List of Todos</Header>
      <Form {...props} />
      <TodoList todos={todos} fetchData={fetchData} />
      <Key todos={todos} />
    </Container>
  );
};

export default ToDo;
