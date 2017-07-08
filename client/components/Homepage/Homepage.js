import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Modal from '../Modal';
import InquiryForm from '../Inquiry/InquiryForm';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: this.props.isModalOpen
    };
  }

  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  render() {
    return (
      <div>
        <h1 className="logo">Moriah Maddux Photography</h1>
        <p className="quote">“Photography is the story I fail to put into words.”</p>
        <p className="quote">— Destin Sparks</p>

        <div className="container">
          <ul className="item">
            <h2>View Galleries</h2>
            <li><Link to={'/'}>Weddings</Link></li>
            <li><Link to={'/'}>Engagement</Link></li>
            <li><Link to={'/'}>Family</Link></li>
            <li><Link to={'/'}>Fine Art</Link></li>
            <li><Link to={'/'}>Other Events</Link></li>
          </ul>

          <img className="item frame" src="client/styles/images/hummingbird.jpg" alt="Hummingbird"/>
          <img className="item frame" src="client/styles/images/wedding.jpg" alt="Bride & Groom at a wedding"/>

          <img className="small item frame" src="client/styles/images/baby.jpg" alt="Newborn baby"/>
          <img className="small item frame" src="client/styles/images/rocky-mountains.jpg" alt="Rocky Mountains"/>

          <ul className="small item">
            <h2>Looking for a photographer?</h2>
            <li><button className="btn" onClick={() => this.toggleModal()}>Book a session</button></li>
            <li><button className="btn">Contact me</button></li>
          </ul>

          <Modal className="modal" isOpen={this.state.isModalOpen} onClose={() => this.toggleModal()}>
            <InquiryForm toggleModal={this.toggleModal.bind(this)} />
          </Modal>

          <div className="item about-me">
            <h2>About me</h2>
            <img className="profile frame" src="client/styles/images/moriah.jpg" alt="Moriah Maddux Profile"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>

          <img className="item frame" src="client/styles/images/children.jpg" alt="Children looking at camera"/>
          <img className="item frame" src="client/styles/images/wave.jpg" alt="Splashing wave"/>
        </div>
      </div>
    );
  }
}

export default Homepage;