import styled from 'styled-components';

const Textarea = styled.textarea`
  font-size: 17px;
  text-indent: 5px;
  border: 1px solid ${({theme}) => theme.borderColor};
`;

export default Textarea;
