import styled from 'styled-components';

const P = styled.p`
  font-size: ${props => props.big ? '19px' : '15px'};
  line-height: 20px;
  ${props => props.center && 'text-align: center;'}
`;

export default P;
