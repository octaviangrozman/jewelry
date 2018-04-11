import styled from 'styled-components';

import { Input as InputBase, Textarea as TextareaBase } from '../../components/';

export const Input = styled(InputBase)`
  width: 100%;
  height: 35px;
  font-size: 16px;
`;

export const Textarea = styled(TextareaBase)`
  width: 100%;
  min-height: 200px;
  max-height: 300px;
  padding: 10px;
  font-size: 16px;
  margin: 20px 0 10px 0;
  max-width: 100%;
`;

export const Button = styled.button`
  outline: none;
  border: none;
  padding: 0 40px;
  display: inline-flex;
  height: 50px;
  justify-content: center;
  align-items: center;
  background: ${({theme}) => theme.green};
  cursor: pointer;
  color: #fff;
  font-size: 23px;

  &:hover {
    opacity: .6;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin: 30px 0 10px 0;
  justify-content: center;
  align-items: center;
`;

export const ErrorMessage = styled.p`
  color: ${({theme}) => theme.error};
  margin: 8px 0;
  font-size: 15px;
`