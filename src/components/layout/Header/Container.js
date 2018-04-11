import styled from 'styled-components';
import media from 'styled-media-query';

import ContainerBase from '../Container';
import { COLORS } from '../../../styles';

const OuterContainer = styled(ContainerBase)`
  display: flex;
  width: 100%;
  height: 100px;
  padding: 0px;
  justify-content: center;
  top: 0px;
  left: 0px;
  ${props => props.absolute && `
    position: absolute;
  `}
  ${props => props.dark && `
    height: 101px;
    border-bottom: 1px solid ${COLORS.BLACK};
  `}
`;

const InnerContainer = styled(ContainerBase)`
  display: flex;
  width: 75%;
  justify-content: space-between;
  align-items: center;

  ${media.lessThan('medium')`
    display: none;
  `}
`;

const HeadingContainer = styled(ContainerBase)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 17px;
  left: calc(50% - 82px);
`;

const ResponsiveContainer = styled.div`
  display: none;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;

  ${media.lessThan('medium')`
    display: flex;
  `}
`;

export { OuterContainer, InnerContainer, HeadingContainer, ResponsiveContainer };
