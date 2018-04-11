import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { authActions } from '../../../data/actions';
import clickOutside from '../../../hoc/clickOutside';

import { OuterContainer, InnerContainer, HeadingContainer, ResponsiveContainer } from './Container';
import { ResponsiveList, BarsIcon } from './Styled';
import Menu from '../../Menu';
import { H1, H4 } from './Heading';

import config from './config';

class Header extends Component {

  static propTypes = {
    dark: PropTypes.bool,
    auth: PropTypes.object.isRequired,
    signoutUser: PropTypes.func.isRequired
  }

  static defaultProps = {
    dark: false
  }

  handleSignout = (e) => {
    e.preventDefault();  
    this.props.signoutUser();
  }

  state = {
    isMenuVisible: false,
    items: config({ 
      authenticated: this.props.auth.authenticated, 
      handleSignout: this.handleSignout
    }).items
  }

  toggleMenu = (e) => {
    this.setState({ isMenuVisible: !this.state.isMenuVisible });
  }

  hideMenu = () => this.setState({ isMenuVisible: false })

  render() {
    const { dark, absolute, user, auth } = this.props;

    const responsiveList = ({ refProp }) => <ResponsiveList innerRef={refProp} visible={this.state.isMenuVisible} onClick={this.toggleMenu}>
      {this.state.items.map(i => {
        if (i.visible !== undefined) {
          if (!i.visible) return;
          return <Menu.Item.Responsive 
            key={i.name} 
            to={i.route} 
            onClick={i.onClick ? i.onClick : () => {}}>
              {i.name}
          </Menu.Item.Responsive>;
        }
        return <Menu.Item.Responsive 
          key={i.name} 
          to={i.route}>
            {i.name}
        </Menu.Item.Responsive>
      })}
    </ResponsiveList>

    const ResponsiveListHOC = clickOutside(responsiveList, this.hideMenu);

    return (
      <OuterContainer dark={dark} absolute={absolute}>
        {<ResponsiveListHOC />}
        <ResponsiveContainer>
          <Link to="/">
            <H1>Kaminin <small>Jewelry</small></H1>
          </Link>
          <BarsIcon name="bars" size={25} onClick={this.toggleMenu} />
        </ResponsiveContainer>
        <InnerContainer>
          <Menu>
            <Menu.Item to="/">Home</Menu.Item>
            <Menu.Item to="/jewels">Jewels</Menu.Item>
          </Menu>
          <Link to="/">
            <HeadingContainer>
              <H1 center>Kaminin</H1>
              <H4 center>Jewelry</H4>
            </HeadingContainer>
          </Link>
          <Menu>
            <Menu.Item to="/about">About</Menu.Item>
            <Menu.Item to="/contact">Contact</Menu.Item>
            {auth.authenticated ? 
              <Menu.Item to="/" onClick={this.handleSignout}>Sign out</Menu.Item> :
              <Menu.Item to="/signin">Sign in</Menu.Item>
            }
          </Menu>
        </InnerContainer>
      </OuterContainer>
    );
  }
};

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = {
  ...authActions
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
