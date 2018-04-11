import { Link } from 'react-router-dom';
import styled from 'styled-components';
import media from '../../../utils/responsive';

const RouteLink = styled(Link)`
  cursor: pointer!important;
  color: #3aa3e3;
  font-size: 17px;
  height: 50px;
  line-height: 50px;
  font-weight: 600;
  padding: 0px 25px;
  text-align: center;
  border: 1px solid rgba(0,0,0,0);
  position: relative;
  top: 1px;
  border-top-left-radius: .25rem;
  border-top-right-radius: .25rem;

  ${media.tablet`
    text-align: left;
    border-right: 1px solid #e8e8e8;
    border-left: 1px solid #e8e8e8;
    border-bottom: 1px solid #e8e8e8;
    width: calc(100% + 1.7px);
    margin-left: -1px;
    order: 10;
    background: #fff;
  `};

  &:hover {
    ${media.tablet`
      background: #f9f9f9;
    `};
    text-decoration: underline;
  }

  &.active, &:first-child {
    background: #fff;
    color: #555459;
    border: 1px solid #e8e8e8;
    border-bottom: 1px solid #fff;
    border-top-left-radius: .25rem;
    border-top-right-radius: .25rem;
    position: relative;
    top: 1px;
    z-index: 50;

    ${media.tablet`
      top: 0px;
      border-bottom: 1px solid #e8e8e8;
      pointer-events: none;
    `}

    &:hover{
      text-decoration: none;
    }
  }
`;

export default RouteLink;
