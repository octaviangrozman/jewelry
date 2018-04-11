import React from 'react';
import { withRouter } from 'react-router'

import { StyledP, StyledSpan, OuterContainer, InnerContainer } from './Styled';
import Icon from '../../Icon';

function Footer(props) {
  const goToFacebook = () => window.location.href = 'https://www.facebook.com/groups/654429598052437/';
  const goToVk = () => window.location.href = 'https://vk.com/club147429898';

  return (
    <OuterContainer>
      <InnerContainer center>
        <StyledP big center>
          ©2017 Kaminin Jewelry, Chisinau
          <StyledSpan>
            <Icon name="facebook" hover onClick={goToFacebook} />
            <Icon name="vk" hover onClick={goToVk} />
            <Icon name="twitter" hover />
          </StyledSpan>
        </StyledP>
      </InnerContainer>
    </OuterContainer>
  );
}

export default withRouter(Footer);
