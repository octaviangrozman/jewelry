import React, { Component } from 'react';
import { Wrapper, InnerWrapper, Title, Form, FormInput, OrderButton } from './Styled';
import BrandButton from '../base/Button/BrandButton';

class MakeOrder extends Component {

	state = {
		firstName: '',
		lastName: '',
		email: '',
		phoneNumber: ''
	}

	handleChangeFirstName = (e) => this.setState({ firstName: e.target.value }) 
	handleChangeLastName = (e) => this.setState({ lastName: e.target.value }) 
	handleChangeEmail = (e) => this.setState({ email: e.target.value }) 
	handleChangePhoneNumber = (e) => this.setState({ phoneNumber: e.target.value }) 

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({ 
			firstName: '',
			lastName: '',
			email: '',
			phoneNumber: ''
		});
	}

	render() {
		return (
			<Wrapper>
				<InnerWrapper>
					<Title center>
						MAKE AN ORDER
					</Title>
					<Form onSubmit={this.handleSubmit}>
						<FormInput placeholder="First name" value={this.state.firstName} onChange={this.handleChangeFirstName} />
						<FormInput placeholder="Last name" value={this.lastName} onChange={this.handleChangeLastName} />
						<FormInput placeholder="Email" value={this.state.email} onChange={this.handleChangeEmail} />
						<FormInput placeholder="Phone Number"value={this.state.phoneNumber} onChange={this.handleChangePhoneNumber}  />
						<BrandButton fluid type="submit">Order</BrandButton>
					</Form>
				</InnerWrapper>
			</Wrapper>
		);
	}
}

export default MakeOrder;