import React from 'react';
import {connect} from 'react-redux';

import { modalActions, jewelsActions } from '../../data/actions';
import AddJewelModal from './AddJewelModal';
import EditJewelModal from './EditJewelModal';

const ModalConductor = props => {
  switch (props.currentModal) {
    case 'ADD_JEWEL':
      return <AddJewelModal {...props} />;

    case 'EDIT_JEWEL':
      return <EditJewelModal {...props} />;

    default:
      return null;
  }
};

const mapDispatchToProps = {
  ...modalActions,
  ...jewelsActions
}

export default connect(state => state, mapDispatchToProps)(ModalConductor);
