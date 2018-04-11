import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  background: rgba(0,0,0,.5);
  z-index: 10000;
`;

const MainContainer = styled.div`
  ${props => props.width && `width: ${props.width}px;`}
  background: #fff;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  color: #fff;
  background: rgba(4, 44, 60, 0.94);
`;

const Title = styled.h3`
  font-weight: 100;
  margin: unset;
`;

const CloseButton = styled.p`
  font-size: 18px;
  padding: 7px;
  cursor: pointer;

  &:hover {
    opacity: .5;
  }
`;

const Content = styled.div`
  padding: 20px;
`;

const ModalWrapper = props => {
  const handleBackgroundClick = e => {
    if (e.target === e.currentTarget) props.hideModal();
  };

  const onOk = () => {
    props.onOk();
    props.hideModal();
  };

  const okButton = props.showOk
    ? (
      <button
        onClick={onOk}
        disabled={props.okDisabled}
      >
        {props.okText}
      </button>
    ) : null;

  return (
    <Wrapper onClick={handleBackgroundClick}>
      <MainContainer width={props.width}>
        <Header>
          <Title>{props.title}</Title>

          <CloseButton onClick={props.hideModal}>Close</CloseButton>
        </Header>
        <Content>
          {props.children}
        </Content>
        {okButton}
      </MainContainer>
    </Wrapper>
  );
};

ModalWrapper.propTypes = {
  title: PropTypes.string,
  showOk: PropTypes.bool,
  okText: PropTypes.string,
  okDisabled: PropTypes.bool,
  width: PropTypes.number,
  style: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,

  hideModal: PropTypes.func,
  onOk: PropTypes.func,
};

ModalWrapper.defaultProps = {
  title: '',
  showOk: true,
  okText: 'OK',
  okDisabled: false,
  width: 400,
  onOk: () => {}
};

export default ModalWrapper;
