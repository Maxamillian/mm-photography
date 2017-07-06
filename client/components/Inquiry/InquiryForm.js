import React, { Component } from 'react';

class InquiryForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Modal title</h1>
        <p>hello</p>
        <p><button className="btn" onClick={() => this.props.toggleModal()}>Close</button></p>
      </div>
    );
  }
}

export default InquiryForm;