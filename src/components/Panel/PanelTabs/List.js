import styled from 'styled-components';
import media from '../../../utils/responsive';

const List = styled.ul`
  display:flex;
  ${media.tablet`
    flex-direction: column;
    posititon: absolute!important;
    height: auto;
    width: 100%;
    background: #fff;
    border-radius: .25rem;
  `};

  & > * {
    box-sizing: border-box;

    ${media.tablet`
      order: 10;
    `};
  }
`;

export default List;
