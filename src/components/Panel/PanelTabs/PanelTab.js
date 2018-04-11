import React from 'react';
import PropTypes from 'prop-types';

import RouteLink from './RouteLink';

const PanelTab = props =>
  <RouteLink {...props} activeClassName="active">
    { props.children }
  </RouteLink>;

PanelTab.propTypes = {
  children: PropTypes.node.isRequired
};

export default PanelTab;
