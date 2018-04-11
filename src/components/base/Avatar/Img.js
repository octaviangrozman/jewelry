import styled from 'styled-components';
import media from 'styled-media-query';

import NormalImg from '../Img/index';

const Img = styled(NormalImg)`
  border-radius: 50%;
  width: 300px;
  height: 300px;
  object-fit: cover;
  border: 1px solid #444;
  padding: 10px;
  cursor: pointer;
  margin: 20px 0;

  ${media.lessThan('medium')`
  `};

  &:hover {
    opacity: 1;
  }
`;

export default Img;
