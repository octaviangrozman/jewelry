import React, { Component } from 'react';

import ModalWrapper from '../ModalWrapper';
import { 
  Input,
  Textarea,
  Button,
  ButtonWrapper,
  ErrorMessage
 } from '../Styled';


class AddJewelModal extends Component {

  state = {
    name: '',
    description: '',
    picture: ''
  }


  onNameChange = (e) => {
    this.setState({ name: e.target.value });
  }

  onDescriptionChange = (e) => {
    this.setState({ description: e.target.value });
  }

  onPictureChange = (e) => {
    this.setState({ picture: e.target.value });
  }

  addJewel = () => {
    const { error, name, description, picture } = this.state;

    this.setState({ error: null });

    if (name == '') {
      this.setState({ error: 'Title is required!' });
      return;
    }
    
    if (picture == '') {
      this.setState({ error: 'Picture is required!' });
      return;
    }

    if (!error) { 
      this.props.hideModal();
      this.props.createJewel({
        name, 
        description, 
        picture
      });
    }
  }

  render() {
    return (
      <ModalWrapper
        {...this.props}
        title="Add a jewel"
        width={400}
        showOk={false}
      >
        <Input type="text" placeholder="Title" onChange={this.onNameChange} value={this.state.name} />
        <Textarea placeholder="Description" onChange={this.onDescriptionChange} value={this.state.description} />
        <Input name="hz" type="text" placeholder="Picture url" onChange={this.onPictureChange} value={this.state.picture} />
        {this.state.error && <ErrorMessage>{this.state.error}</ErrorMessage>}
        <ButtonWrapper>
          <Button onClick={this.addJewel}>Add</Button>
        </ButtonWrapper>
      </ModalWrapper>
    );
  }
}

export default AddJewelModal;
