import styled from 'styled-components';

import {
    P as PBase,
    Container as ContainerBase,
    H1 as H1Base 
} from '../../components';

export const Container = styled(ContainerBase)`
  padding: 50px 0px;
`;

export const AboutContainer = styled(ContainerBase)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
`;

export const P = styled(PBase)`
  font-size: 19px;
  line-height: 30px;
  padding: 0 5%;
  margin: 20px 0;
`;

export const H1 = styled(H1Base)`
  margin-bottom: 10px;
  text-transform: uppercase;
`