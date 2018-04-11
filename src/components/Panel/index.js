import React from 'react';
import PropTypes from 'prop-types';

import PanelBody from './PanelBody';
import PanelWrapper from './PanelWrapper';
import PanelTab from './PanelTabs/PanelTab';
import PanelTabs from './PanelTabs';

Panel.propTypes = {
  children: PropTypes.node.isRequired,
  visible: PropTypes.bool,
  tabs: PropTypes.element,
  className: PropTypes.string
};

Panel.defaultProps = {
  visible: true,
  tabs: null,
  className: null
};

function Panel({ children, tabs, className, visible }) {
  return (
    <PanelWrapper visible={visible}>
      {tabs && tabs}
      <PanelBody className={className}>
        {children}
      </PanelBody>
    </PanelWrapper>
  );
}

Panel.Tabs = PanelTabs;
Panel.Tab = PanelTab;

export default Panel;
