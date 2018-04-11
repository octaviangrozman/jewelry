import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { jewelsActions } from '../../data/actions';

import { H1, H4, P, Header } from '../index';
import { Img, StyledP, StyledH4, Container, InnerContainer } from './Styled';

class Jewel extends Component {

  state = {
    jewel: {}
  }

  componentDidMount() {
    this.props.fetchJewel(this.props.match.params.id);
  }

  getJewelById = () => {
    const jewel = this.props.jewels.filter((jewel) => {
      return jewel._id === this.props.match.params.id;
    })[0];
    this.setState({ jewel });
  }

  formatDate(date) {
    const dateObject = new Date(date);
    return dateObject.toLocaleDateString();
  }

  render() {
    const { jewel, fetching } = this.props;
    return (
      <div>
        <Header dark />
        <Container center>
          {!fetching ? <InnerContainer>
            <Img src={jewel.picture} alt={jewel.name} />
            <div>
              <H1>{jewel.name}</H1>
              <StyledH4>Description</StyledH4>
              <StyledP>{jewel.description}</StyledP>
              <StyledH4>Added: <small>{this.formatDate(jewel.postDate)}</small></StyledH4>
            </div>
          </InnerContainer> : 'Loading...'}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    jewel: state.jewels.jewel,
    fetching: state.jewels.fetching
  }
}

const mapDispatchToProps = {
    ...jewelsActions
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Jewel));
