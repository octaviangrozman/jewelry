import styled from 'styled-components';
import ContainerBase from '../../components/layout/Container';
import { COLORS } from '../../styles';
import bgImage from '../../../images/1.jpg';

const Wrapper = styled(ContainerBase)`
  display: block;
  padding: 0px;
`;

const TitleContainer = styled(ContainerBase)`
  display: flex;
  height: 100vh;
  padding: 0px;
  align-items: center;
  justify-content: center;
  background-image: url(${bgImage});
  background-repeat: none;
  background-size: cover;
  background-position: center center;
`;

const JewelsContainer = styled(ContainerBase)`
  padding: 60px 0 0 0;
`;

const AboutContainer = styled(ContainerBase)`
  display: flex;
  justify-content: center;
  padding: 50px 0;
  background: ${COLORS.BEIGE};
`;

const AboutInnerContainer = styled(ContainerBase)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
`;

export { Wrapper, JewelsContainer, TitleContainer, AboutContainer, AboutInnerContainer };
