import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { authActions } from '../../data/actions';
import { Header } from '../../components';
import { 
    OuterContainer,
    InnerContainer,
    ButtonContainer,
    StyledButton,
    StyledInput,
    StyledLink,
    ErrorMessage 
  } from './Styled';
import keyCodes from '../../utils/keyCodes';
import { validateEmail, validateRequired } from '../../utils/validation';

class Signin extends Component {
  state = {
    email: '',
    password: '',
    errors: {}
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.authenticated) {
      this.props.history.push('/');
    }
  }

  setEmail = (e) => {
    e.preventDefault();
    this.setState({ error: null, email: e.target.value });
  }

  setPassword = (e) => {
    e.preventDefault();
    this.setState({ error: null, password: e.target.value });
  }

  signin = () => {
    const { email, password, errors } = this.state;
    const { signinUser, clearError } = this.props;
  
    clearError();

    this.validateForm();

    if (errors.email || errors.password) return;

    signinUser(email, password);
  }

  handleKeyUp = (e) => {
    if (e.keyCode === keyCodes.ENTER) this.signin();
  }

  validateForm = () => {
    const { email, password } = this.state;

    this.setState({
      errors: {
        email: validateRequired({ name: 'Email', field: email }) || validateEmail(email),
        password: validateRequired({ name: 'Password', field: password })
      }
    })
  }

  renderErrorMessage = () => {
    const { errors } = this.state;
    const { error : serverError } = this.props.auth;

    if (errors.email || errors.password || serverError) return (
      <ErrorMessage>{errors.email || errors.password || serverError}</ErrorMessage>
    )
    return null;
  }

  render() {
    return (
      <div>
        <Header />
        <OuterContainer>
          <InnerContainer>
            <StyledInput placeholder="Email" onChange={this.setEmail} onKeyUp={this.handleKeyUp} />
            <StyledInput placeholder="Password" onChange={this.setPassword} type="password" onKeyUp={this.handleKeyUp} />
            <ButtonContainer>
              <StyledButton onClick={this.signin}>Sign in</StyledButton>
            </ButtonContainer>
            <StyledLink to="/signup">Or, sign up now!</StyledLink>
            {this.renderErrorMessage()}
          </InnerContainer>
        </OuterContainer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = {
  ...authActions
};


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Signin));
