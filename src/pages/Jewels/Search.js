import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Input as InputBase } from 'semantic-ui-react';
import styled from 'styled-components';

import { SearchSelectors } from '../../data/selectors';
import { searchActions } from '../../data/actions';

const Container = styled.div`
  margin: 50px 0;
`;


const Input = styled(InputBase)`
  width: 100%;
  height: 55px;
`;

Search.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
};

function Search(props) {
  const handleChange = (e, data) => {
    props.setSearchValue(data.value);
  }

  return (
    <Container>
      <Input size='large' icon='search' placeholder='Search for any jewel' onChange={handleChange} />
    </Container>
  );
}

const mapStateToProps = (state) => ({
  searchValue: SearchSelectors.selectSearchValue(state)
});

const mapDispatchToProps = ({
  ...searchActions
});


export default connect(mapStateToProps, mapDispatchToProps)(Search);
