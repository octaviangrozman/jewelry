import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
  ${props => props.onClick && 'cursor: pointer;'};

  &:hover {
    opacity: ${props => props.onClick && '.6'};
  }
`;

export default Wrapper;
