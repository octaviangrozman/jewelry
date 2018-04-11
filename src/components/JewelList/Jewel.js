import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { jewelsActions, modalActions } from '../../data/actions';

import { JewelContainer, InfoContainer } from './Container';
import { H2, P } from '../index';

import Button from '../base/Button';
import Icon, { ICONS } from '../Icon';

const StyledButton = styled(Button)`
  position: absolute;
  bottom: 5px;
  width: 70%;
  justify-content: center;
  transition: .2s ease-in;
  border-color: ${({theme}) => theme.black};
  color: ${({theme}) => theme.black};

  &:hover {
    background: inherit;
    color: #FFF;
    background: ${({theme}) => theme.black}
  }
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  top: 10px;
  right: 0px;
`;

class Jewel extends Component {

  static propTypes = {
    picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }

  state = {
    infoVisible: false
  }

  onHover = () => {
    this.setState({ infoVisible: !this.state.infoVisible });
  }

  goToJewelDetails = () => {
    this.props.history.push(`/jewels/${this.props.id}`);
  }

  render () {
    const { picture, name, description, id, removeJewel, selectJewel, setModal, authenticated } = this.props;

    return (
      <JewelContainer 
        picture={picture} 
        onMouseEnter={this.onHover} 
        onMouseLeave={this.onHover} 
        onClick={this.goToJewelDetails}
      >
        {this.state.infoVisible &&
          <InfoContainer>
            <H2>{name}</H2>
            <P center>{description}</P>
            {authenticated &&
              [
                <StyledButton
                  key={1}
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); selectJewel(id); setModal('EDIT_JEWEL'); }}
                >
                  Edit
                </StyledButton>,
                <StyledIcon
                  key={2}
                  name="times"
                  size={35}
                  hover
                  onClick={(e) => { e.preventDefault(); removeJewel(id)} }
                />
              ]
            }
          </InfoContainer>
        }
      </JewelContainer>
    );
  }
}

const mapStateToProps = (state) => { 
  return { authenticated: state.auth.authenticated }
}

const mapDispatchToProps = {
  removeJewel: jewelsActions.removeJewel,
  selectJewel: jewelsActions.selectJewel,
  setModal: modalActions.setCurrentModal
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Jewel));
