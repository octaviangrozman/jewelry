import styled from 'styled-components';
import media from 'styled-media-query';

const Container = styled.div`
  display: block;
  padding: 0px 15px;
  ${props => props.center && `
    width: 75%;
    margin: 0 auto;
  `}
  ${props => props.center && media.lessThan('medium')`
    width: 100%;
    padding-left: 10%;
    padding-right: 10%;
  `}

`;

export default Container;
