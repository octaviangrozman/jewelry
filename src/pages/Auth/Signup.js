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
    ErrorMessage 
  } from './Styled';
import keyCodes from '../../utils/keyCodes';
import { validateEmail, validateRequired, validateEquals } from '../../utils/validation';

class Signup extends Component {
  state = {
    email: '',
    password: '',
    repeatPassword: '',
    errors: {}
  }

  componentWillMount() {
      if (this.props.auth.authenticated) this.props.signoutUser();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.authenticated) {
      this.props.history.push('/');
    }
  }

  setEmail = (e) => {
    e.preventDefault();
    this.setState({ email: e.target.value });
  }

  setPassword = (e) => {
    e.preventDefault();
    this.setState({ password: e.target.value });
  }

  setRepeatPassword = (e) => {
    e.preventDefault();
    this.setState({ repeatPassword: e.target.value });
  }

  signup = () => {
    const { email, password, repeatPassword, errors } = this.state;
    const { signupUser, clearError } = this.props;
  
    clearError();

    this.validateForm();

    if (errors.email || errors.password || errors.repeatPassword) return;

    signupUser(email, password);
  }

  handleKeyUp = (e) => {
    if (e.keyCode === keyCodes.ENTER) this.signup();
  }

  validateForm = () => {
    const { email, password, repeatPassword } = this.state;

    const emailConfig = { name: 'Email', field: email };
    const passwordConfig = { name: 'Password', field: password };
    const repeatPasswordConfig = { name: 'Confirm Password', field: repeatPassword };

    this.setState({
      errors: {
        email: validateRequired(emailConfig) || validateEmail(email),
        password: validateRequired(passwordConfig) || validateEquals({ ...passwordConfig, equalToName: repeatPasswordConfig.name, equalTo: repeatPasswordConfig.field }),
        repeatPassword: validateRequired(repeatPasswordConfig)
      }
    })
  }

  renderErrorMessage = () => {
    const { errors } = this.state;
    const { error : serverError } = this.props.auth;

    if (errors.email || errors.password || errors.repeatPassword || serverError) return (
      <ErrorMessage>{errors.email || errors.password || errors.repeatPassword || serverError}</ErrorMessage>
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
            <StyledInput placeholder="Repeat Password" onChange={this.setRepeatPassword} type="password" onKeyUp={this.handleKeyUp} />
            <ButtonContainer>
              <StyledButton onClick={this.signup}>Sign up</StyledButton>
            </ButtonContainer>
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
)(Signup));
