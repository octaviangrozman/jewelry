import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider  } from 'styled-components'
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css';

import ModalConductor from './components/Modal/ModalConductor';
import store from './store';
import globalStyles from './globalStyles';
import App from './App';
import axiosConfig from './config/axios';
import { AUTH_USER } from './data/types/auth';

// css theme
import themes from './utils/themes'

// set base url for all API calls
axios.defaults.baseURL = axiosConfig.BASE_URL;

const token = localStorage.getItem('token');

// if we have a token, user is authenticated
if (token) {
  // we need to update app state (redux state) before rendering routes
  store.dispatch({ type: AUTH_USER })

  // set 'authorization' header for all API requests/calls
  axios.defaults.headers.common['authorization'] = token;
}

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={themes.main}>
      <div>
        <App />
        <ModalConductor />
      </div>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
