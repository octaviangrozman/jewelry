import styled from 'styled-components';
import { COLORS } from '../../../styles';

const Button = styled.button`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: 50px;
  padding: 0 20px;
  font-size: 20px;
  cursor: pointer;
  background: transparent;
  outline: 0;
  border: 2px solid ${COLORS.DARK_BEIGE};
  color: ${COLORS.DARK_BEIGE};
  transition: all .2s ease-in-out;
  ${({ fluid }) => fluid && 'width: 100%;'} 

  &:hover {
    background: ${COLORS.DARK_BEIGE};
    color: #fff;
  }
`;


export default Button;
