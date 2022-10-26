import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0px;
  @media (max-width: 420px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  background-color: #f7f7f7;
  width: 100%;
  padding: 8px;
  border: 1px solid #ef7360;
  border-radius: 8px;
  :focus {
    border: 1.5px solid #ef7360;
    outline: none;
  }
`;

export const Button = styled.button`
  background-color: #ef7360;
  border-radius: 18px;
  border: 1.5px solid #ef7360;
  color: white;
  margin-left: 10px;
  padding: 8px 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  width: 140px;
  :hover {
    background-color: #ef7990;
  }
  @media (max-width: 420px) {
    margin-top: 12px;
  }
`;
