import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ICONS } from '../../Icon';
import Icon from './Icon';
import Wrapper from './Wrapper';
import List from './List';

class PanelTabs extends Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
  };

  static defaultProps = {
    className: null
  }

  state = {
    extended: false
  }

  extendPanelTabs = () => {
    this.setState({ extended: !this.state.extended });
  }

  render() {
    const { children, className } = this.props;
    const { extended } = this.state;

    return (
      <Wrapper extended={extended} className={className} onClick={this.extendPanelTabs}>
        <List>
          {children}
        </List>
        {/* <Icon
          fa
          icon={extended ? ICONS.CHEVRON_DOWN : ICONS.CHEVRON_UP}
          size={15}
        /> */}
      </Wrapper>
    );
  }
}

export default PanelTabs;
