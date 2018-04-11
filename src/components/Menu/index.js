import React from 'react';
import PropTypes from 'prop-types';
import MenuWrapper from './MenuWrapper';
import MenuItem from './MenuItem';

Menu.propTypes = {
  children: PropTypes.node.isRequired
};

function Menu(props) {
  return (
    <MenuWrapper>
      {props.children}
    </MenuWrapper>
  );
}

Menu.Item = MenuItem;

export default Menu;
