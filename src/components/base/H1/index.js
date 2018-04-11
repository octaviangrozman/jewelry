import styled from 'styled-components';
import media from 'styled-media-query';

const H1 = styled.h1`
  display: block;
  margin: 0;
  font-weight: normal;
  font-size: 30px;
  ${props => props.center && 'text-align: center;'}

  ${media.lessThan('medium')`
    font-size: 26px;
  `}
`;

export default H1;
