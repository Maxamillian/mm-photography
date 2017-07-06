import React, { Component } from 'react';
import Navbar from './Navigation/Navbar';
import Homepage from './Homepage/Homepage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
  }
  render() {
    return (
      <div>
        <Navbar isModalOpen={this.state.isModalOpen} />
        <Homepage isModalOpen={this.state.isModalOpen}/>
      </div>
    );
  }
}

export default App;