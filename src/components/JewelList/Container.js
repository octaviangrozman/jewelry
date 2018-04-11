import styled from 'styled-components';
import media from 'styled-media-query';

import ContainerBase from '../layout/Container';
import { fadeIn } from '../../utils/animations';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: auto;
  width: 100%;
  margin-bottom: 40px;
  padding: 0;
`;

const JewelContainer = styled(ContainerBase)`
  display: inline-flex;
  width: 23%;
  margin: 10px 2% 10px 0px;
  height: auto;
  position: relative;
  background-image: url(${props => props.picture});
  background-size: cover;
  background-position: center;
  cursor: pointer;

  &:before {
    content: "";
    display: block;
    padding-top: 105%;
  }

  ${media.lessThan('large')`
    width: 46%;
    margin: 30px 0px;
  `}

  ${media.lessThan('small')`
    width: 100%;
    margin: 30px 0px;
  `}
`;

const AddContainer = styled(JewelContainer)`
  background: #f0f0f0;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const InfoContainer = styled(ContainerBase)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 30px;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 5;
  background: rgba(255,255,255,.9);
  animation: ${fadeIn} .5s ease-in-out;
`;

export { Wrapper, JewelContainer, AddContainer, InfoContainer };
