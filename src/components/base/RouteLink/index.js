import { Link } from 'react-router-dom';
import styled from 'styled-components';

const RouteLink = styled(Link)`
  color:#333;
  &:hover,&:visited, &:link, &:active {
    color:#333;
  }
`;

export default RouteLink;
