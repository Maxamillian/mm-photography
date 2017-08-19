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

          <p>What type of photo shoot are you planning?</p>
          <select name="type">
            <option value="wedding">Wedding</option>
            <option value="engagement">Engagement</option>
            <option value="family">Family</option>
            <option value="other">Other Event</option>
          </select>

          <p>When is the event?</p>
          <input type="date"/>

          <p>Where are you planning it?</p>
          <input type="text" placeholder="Location"/>

          <p>How long is this shoot?</p>
          <input type="text" placeholder="# of hours"/>

          <p>What's your budget?</p>
          <input type="text" placeholder="Budget"/>

          <button className="submit btn" onClick={() => this.toggleTab()}>Submit</button>
        </div>
      ) || this.state.tab === 2 && (
      <div className="inquiry">
        <h1>Form Submitted!</h1>
        <p>(Just kidding!)</p>
      </div>
      )
    );
  }
}

export default InquiryForm;