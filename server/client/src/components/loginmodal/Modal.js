import React, { Component } from 'react';
import { Modal } from 'react-bootstrap'
import './modal.css'

class LogModal extends Component {

  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.close.bind(this)} className="modal">
        <Modal.Header closeButton>
          <Modal.Title>Please Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="soc-buttons">
            <a href="/auth/google" className="fa fa-google"></a>
            <a href="/auth/facebook" className="fa fa-facebook"></a>
            <a href="/auth/linkedin" className="fa fa-linkedin"></a>
          </div>
        </Modal.Body>
        {/*<Modal.Footer>
          <a className="waves-effect waves-light btn" onClick={this.props.close.bind(this)}>Close</a>
        </Modal.Footer>*/}
      </Modal>
    );
  }
};

export default LogModal;