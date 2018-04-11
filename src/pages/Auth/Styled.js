import styled from 'styled-components';
import { Button, Input, P } from '../../components';
import { Link } from 'react-router-dom';

export const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 100px);
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const InnerContainer = styled.div`
  width: 400px;
  padding: 50px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  justify-content: center;
`;

export const StyledInput = styled(Input)`
  width: 100%;
  margin-bottom: 20px;
`;

export const StyledLink = styled(Link)`
  top: 4px;
  position: relative;
  color: #ccc;
  font-size: 13px;
  
  &:hover {
    color: #444;
  }
`

export const ErrorMessage = styled(P)`
  position: absolute;
  color: ${({theme}) => theme.error}
  margin-top: 5px;;
`;