import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Navbar from './Navigation/Navbar';

import Homepage from './Homepage/Homepage';

const history = createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router history={history}>
        <div>
          Hello world
          <Navbar />
          <Route exact path="/" component={Homepage} />
        </div>
      </Router>
    );
  }
}

export default App;
