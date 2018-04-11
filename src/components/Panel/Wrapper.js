import styled from 'styled-components';

const Wrapper = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
  width: 100%;
  margin-bottom: 30px;
`;

export default Wrapper;
