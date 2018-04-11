import styled from 'styled-components';
import PBase from '../../components/base/P';
import H1Base from '../../components/base/H1';
import { COLORS } from '../../styles';

const P = styled(PBase)`
  font-size: 19px;
  line-height: 30px;
  padding: 0 17%;
  margin-top: 20px;
`;

const H1 = styled(H1Base)`
  margin-bottom: 10px;
  text-transform: uppercase;
`

const CallTitle = styled(H1Base)`
  text-transform: uppercase;
  font-size: 50px;
  padding: 10px 20px;
  color: white;
  border: 2px solid ${COLORS.DARK_BEIGE};
`

export { P, H1, CallTitle };
