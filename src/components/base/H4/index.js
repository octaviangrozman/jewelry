import styled from 'styled-components';
import media from 'styled-media-query';

const H4 = styled.h4`
  display: block;
  margin: 0;
  font-weight: 600;
  font-size: 18px;
  ${props => props.center && 'text-align: center;'}

  ${media.lessThan('medium')`
    font-size: 16px;
  `}
`;

export default H4;
