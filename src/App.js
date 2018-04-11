import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { connect } from 'react-redux';

// auth HOC middleware
import RequireAuth from './hoc/requireAuth';

import { jewelsActions } from './data/actions';
import Contact from './pages/Contact';
import Home from './pages/Home';
import About from './pages/About';
import Jewels from './pages/Jewels';
import Signin from './pages/Auth/Signin';
import Signup from './pages/Auth/Signup';
import Layout from './layout';
import Jewel from './components/Jewel';

const ProtectedRoute = ({props}) => <div>Protected test route</div>;

class App extends Component {
  componentDidMount() {
    this.props.fetchJewels();
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Layout>
            <Switch>
              <Route exact path="/" render={(props) => <Home jewels={this.props.jewels} {...props} />} />
              <Route path="/contact" component={Contact} />
              <Route exact path="/about" component={About} />
              <Route exact path="/jewels" render={(props) => <Jewels jewels={this.props.jewels} {...props} />} />
              <Route exact path="/jewels/:id" render={(props) => <Jewel jewels={this.props.jewels} {...props} />} />
              <Route exact path="/jewels/edit/:id" component={RequireAuth(ProtectedRoute)} />
            </Switch>
          </Layout>
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    jewels: state.jewels.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchJewels: () => {
      dispatch(jewelsActions.fetchJewels())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
