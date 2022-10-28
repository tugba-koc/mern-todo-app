import { FormContainer, Input, Button } from './styles';

const Form = (props) => {
  const { input, setInput, addTodo } = props;
  console.log(input, 'input');
  return (
    <FormContainer>
      <Input value={input} onChange={(e)=>setInput(e.target.value)} type='text' role='input' />
      <Button type='submit' onSubmit={()=>addTodo()}>Add</Button>
    </FormContainer>
  );
};

export default Form;
