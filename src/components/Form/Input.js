import styled from 'styled-components';

const Input = styled.input`
  height: 50px;
  font-size: 17px;
  text-indent: 15px;
  border: 1px solid ${({theme}) => theme.borderColor};
`;

export default Input;
