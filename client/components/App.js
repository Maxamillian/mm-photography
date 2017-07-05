import React, { Component } from 'react';
import Navbar from './Navigation/Navbar';
import Homepage from './Homepage/Homepage';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Homepage />
      </div>
    );
  }
}

export default App;