import styled from 'styled-components';
import TextField from '@mui/material/TextField';

export const Forma = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 7px;
  padding: 20px;
  width: 400px;
`;

export const Input = styled(TextField)`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
