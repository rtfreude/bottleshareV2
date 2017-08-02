import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap'
import './modal.css'

class LogModal extends Component {

  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.close.bind(this)} className="modal">
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <li><a href="/auth/google">Google Login</a></li>
            <li><a href="/auth/facebook">Facebook Login</a></li>
            <li><a href="/auth/linkedin">Linkedin Login</a></li>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <a className="waves-effect waves-light btn" onClick={this.props.close.bind(this)}>Close</a>
        </Modal.Footer>
      </Modal>
    );
  }
};

export default LogModal;