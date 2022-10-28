import styled from 'styled-components';

export const Container = styled.ul`
  padding: 0;
  cursor: pointer;
  width: 50%;
`;

export const Row = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  font-size: 16px;
`;

export const Text = styled.span`
  ::first-letter {
    text-transform: capitalize;
  }
  color: ${(props) => props.isCompleted ? 'red' : null};
  text-decoration : ${(props)=>props.isCompleted ? 'line-through' : null}
`;

export const DeleteIcon = styled(Text)`
  font-weight: 600;
`
