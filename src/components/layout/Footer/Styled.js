import styled from 'styled-components';
import media from 'styled-media-query';

import ContainerBase from '../Container';
import { COLORS } from '../../../styles';
import P from '../../base/P';

export const OuterContainer = styled(ContainerBase)`
  padding: 40px 0;
  border-top: 1px solid ${COLORS.BLACK};
`;

export const InnerContainer = styled(ContainerBase)`
  display: flex;
  justify-content: center;
`;

export const StyledP = styled(P)`
  ${media.lessThan('medium')`
    display: flex;
    flex-direction: column;
  `}
`;

export const StyledSpan = styled.span`
  .icon {
    margin-left: 15px;
  }

  ${media.lessThan('medium')`
    display: flex;
    width: 100%;
    margin-top: 15px;
    justify-content: space-evenly;
  `}
`;