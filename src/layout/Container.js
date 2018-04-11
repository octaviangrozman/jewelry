import styled from 'styled-components';
import ContainerBase from '../components/layout/Container';

const OuterContainer = styled(ContainerBase)`
  min-height: 100vh;
  padding: 0px;
`;

const InnerContainer = styled(ContainerBase)`
  min-height: 100vh;
  padding: 0;
`;

export { OuterContainer, InnerContainer };
