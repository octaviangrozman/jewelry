import styled from 'styled-components';
import media from '../../../utils/responsive';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  ${media.tablet`
    background: #fff;
    border: 1px solid #e8e8e8;
    border-bottom: none;
    border-top-left-radius: .25rem;
    border-top-right-radius: .25rem;
    height: ${props => (props.extended ? 'auto' : '50px')};
    overflow: ${props => (props.extended ? 'visible' : 'hidden')};
  `};
`;

export default Wrapper;
