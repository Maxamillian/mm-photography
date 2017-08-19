import React, { Component } from 'react';

class Modal extends Component {
  close(e) {
    e.preventDefault();

    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  render() {
    if (this.props.isOpen === false) {
      return null;
    }

    let modalStyle = {
      height: '80%',
      width: '80%'
    };

    if (this.props.width && this.props.height) {
      modalStyle.width = this.props.width + '%';
      modalStyle.height = this.props.height + '%';
    }

    if (this.props.style) {
      for (let key in this.props.style) {
        modalStyle[key] = this.props.style[key];
      }
    }

    let backdropStyle = {};

    if (this.props.backdropStyle) {
      for (let key in this.props.backdropStyle) {
        backdropStyle[key] = this.props.backdropStyle[key];
      }
    }

    return (
      <div className={this.props.containerClassName}>
        <div className={this.props.className} style={modalStyle}>
          {this.props.children}
        </div>
        {!this.propsnoBackdrop &&
          <div
            className="backdrop {this.props.backdropClassName}"
            style={backdropStyle}
            onClick={e => this.close(e)}
          />}
      </div>
    );
  }
}

export default Modal;
