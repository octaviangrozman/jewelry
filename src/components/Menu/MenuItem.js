import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MenuItem = styled(Link)`
  display: inline-flex;
  padding: 8px 10px;
  text-transform: uppercase;
  font-size: 14px;

  &:hover {
    font-weight: 600;
    font-size: 13.5px;
  }
`;

const ResponsiveMenuItem = styled(Link)`
  display: flex;
  width: 100%;
  height: 30px;
  align-items: center;
  text-transform: capitalize;
  font-size: 16px;
  width: 100%;
  background: ${({theme}) => theme.black};
  color: #fff!important;
  padding: 22px 4%;
`;

MenuItem.Responsive = ResponsiveMenuItem;

export default MenuItem;
