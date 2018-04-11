import styled from 'styled-components';
import media from 'styled-media-query';
import H4 from '../base/H4';

export const Img = styled.img`
  width: 300px;
  margin: 0 30px 0 0;
  
  ${media.lessThan('medium')`
    width: 100%;
    margin: 0 0 30px 0;
  `}
`;

export const StyledP = styled.p`
  font-weight: 500;
  margin-bottom: 30px;  
`;

export const StyledH4 = styled(H4)`
  margin: 20px 0 10px 0;
`;

export const Container = styled.div`
  padding: 60px 20px 50px 20px;
  width: 75%;
  margin: 0 auto;

  ${media.lessThan('medium')`
    width: 100%;
    padding: 30px 10%;
  `}
`;

export const InnerContainer = styled.div`
  display: flex;
  align-items: flex-start;

  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`;