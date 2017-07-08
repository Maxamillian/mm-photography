import React, { Component } from 'react';

class InquiryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 1
    };
  }

  toggleTab() {
    if (this.state.tab < 5) {
      this.setState({
        tab: this.state.tab + 1
      });

      if (this.state.tab === 5) {
        // if we're on the last tab, the next button should become a submit button
      }
    } else {
      // submit form
    }
  }

  render() {

    return (

      this.state.tab === 1 && (
        <div className="inquiry">
          <h1>Submit an inquiry</h1>
          <p>What's your name?</p>

          <input type="text" placeholder="First"/>
          <input type="text" placeholder="Last"/>

          <button className="btn cancel" onClick={() => this.props.toggleModal()}>Never mind</button>
          <button className="btn" onClick={() => this.toggleTab()}>Next</button>
        </div>
      ) || this.state.tab === 2 && (
      <div className="inquiry">
        <h1>New tab!</h1>
      </div>
      )
    );
  }
}

export default InquiryForm;