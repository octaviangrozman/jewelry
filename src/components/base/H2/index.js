import styled from 'styled-components';
import media from 'styled-media-query';

const H2 = styled.h2`
  display: block;
  margin: 0;
  font-weight: normal;
  font-size: 26px;
  ${props => props.center && 'text-align: center;'}

  ${media.lessThan('medium')`
    font-size: 22px;
  `}
`;

export default H2;
