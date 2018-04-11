import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { Wrapper, AddContainer } from './Container';
import { modalActions } from '../../data/actions';
import Jewel from './Jewel';

JewelList.propTypes = {
  jewels: PropTypes.array.isRequired,
  isHomePage: PropTypes.bool,
  searchValue: PropTypes.string
}

JewelList.defaultProps = {
  isHomePage: false,
  searchValue: null
}

function JewelList(props) {
  const { jewels, isHomePage, searchValue, authenticated } = props;

  const Jewels = jewels.map(jewel =>
    <Jewel
      id={jewel._id}
      key={jewel._id}
      picture={jewel.picture}
      name={jewel.name}
      description={jewel.description}
      postDate={jewel.postDate}
    />
  );

  const filterJewel = (jewel) => 
    jewel.name.toLowerCase().includes(searchValue.toLowerCase().trim()) ||
    jewel.description.toLowerCase().includes(searchValue.toLowerCase().trim());

  const FilteredJewels = jewels
    .filter(jewel => filterJewel(jewel))
    .map(jewel =>
      <Jewel
        id={jewel._id}
        key={jewel._id}
        picture={jewel.picture}
        name={jewel.name}
        description={jewel.description}
        postDate={jewel.postDate}
      />
    );

  return (
    <Wrapper>
      {searchValue ? FilteredJewels : Jewels}
      {authenticated && !isHomePage && 
        <AddContainer 
          onClick={() => props.setModal('ADD_JEWEL')}> 
          Add jewel 
        </AddContainer>}
    </Wrapper>
  );
}

const mapStateToProps = (state) => { 
  return { authenticated: state.auth.authenticated }
}

const mapDispatchToProps = {
  setModal: modalActions.setCurrentModal
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JewelList);
