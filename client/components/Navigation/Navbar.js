import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Modal from '../Modal';
import InquiryForm from '../Inquiry/InquiryForm';

// Navigation Menu
class NavBarLinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: this.props.isModalOpen
    }
  }

  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  render() {
    return (
      <div>
        <Link className="nav-logo" to={'/'}>MM</Link>

        <nav className="nav primary-nav">
          <ul>
            <li><Link to={'/'}>Galleries</Link></li>
            <li><Link to={'/'} onClick={() => this.toggleModal()}>Book now</Link></li>
            <li><Link to={'/'}>Sign in</Link></li>
          </ul>
        </nav>

        <Modal className="modal" isOpen={this.state.isModalOpen} onClose={() => this.toggleModal()}>
          <InquiryForm toggleModal={this.toggleModal.bind(this)} />
        </Modal>
      </div>
    );
  }
}

export default NavBarLinks;