import styled from 'styled-components';
import media from 'styled-media-query';

const H3 = styled.h3`
  display: block;
  margin: 0;
  font-weight: 600;
  font-size: 22px;
  ${props => props.center && 'text-align: center;'}

  ${media.lessThan('medium')`
    font-size: 18px;
  `}
`;

export default H3;
