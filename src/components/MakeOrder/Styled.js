import styled from 'styled-components';
import media from 'styled-media-query';

import { Input } from '../index';
import ContainerBase from '../layout/Container';
import { H1, Button } from '../index';

export const Wrapper = styled(ContainerBase)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
`;

export const InnerWrapper = styled.div`
  width: 450px;

  ${media.lessThan('medium')`
    width: 100%;
    padding: 0 4%;
  `}
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px 0;
`;

export const FormInput = styled(Input)`
  width: 100%;
  margin: 10px 0;
`;

export const Title = styled(H1)`
  text-transform: uppercase;
`;

export const OrderButton = styled(Button)`
  width: 100%;
`;
