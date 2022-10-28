import { useEffect, useState } from 'react';
import Form from '../Form';
import { Container, Header } from './styles';
import axios from '../../axios';

const ToDo = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const addTodo = async () => {
    console.log('hello')
  }
  const props = {
    input,
    setInput,
    addTodo
  };

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

  return (
    <Container>
      <Header>List of Todos</Header>
      <Form {...props} />
    </Container>
  );
};

export default ToDo;
