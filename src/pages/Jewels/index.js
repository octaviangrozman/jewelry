import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { SearchSelectors } from '../../data/selectors';

import {
  Header,
  JewelList,
  Container as ContainerBase,
  H1 } from '../../components';
  import Search from './Search';

const Container = styled(ContainerBase)`
  padding: 50px 25px;
`;

Jewels.propTypes = {
  searchValue: PropTypes.string.isRequired,
  jewels: PropTypes.array.isRequired
};

function Jewels(props) {
  return (
    <div>
      <Header dark />
      <Container center>
        <H1> All Jewels </H1>
        <Search />
        <JewelList searchValue={props.searchValue} jewels={props.jewels} {...props}/>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => ({
  searchValue: SearchSelectors.selectSearchValue(state)
});

export default connect(mapStateToProps)(Jewels);
