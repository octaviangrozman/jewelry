import React, { Component } from 'react';

import ModalWrapper from '../ModalWrapper';

import { 
  Input,
  Textarea,
  Button,
  ButtonWrapper,
  ErrorMessage
 } from '../Styled';


class EditJewelModal extends Component {

  state = {
    id: '',
    name: '',
    description: '',
    picture: ''
  }

  filterJewel = () => {
    const id = this.props.selectedJewel;
    const jewels = this.props.jewels.data;
    const jewel = jewels.filter(item => item._id === id)[0];
    this.setState({
      id: jewel._id,
      name: jewel.name,
      description: jewel.description,
      picture: jewel.picture
    });
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

  componentDidMount() {
    this.filterJewel();
  }

  save = () => {
    this.props.hideModal();
    const jewel = {...this.state};
    this.props.editJewel(jewel);
  }

  render() {
    return (
      <ModalWrapper
        {...this.props}
        title="Edit Jewel"
        width={400}
        showOk={false}
      >
        <Input type="text" placeholder="Title" onChange={this.onNameChange} value={this.state.name}/>
        <Textarea placeholder="Description" onChange={this.onDescriptionChange} value={this.state.description} />
        <Input type="text" placeholder="Picture url" onChange={this.onPictureChange} value={this.state.picture}/>
        <ButtonWrapper>
          <Button onClick={this.save}>Save</Button>
        </ButtonWrapper>
      </ModalWrapper>
    );
  }
}

export default EditJewelModal;
