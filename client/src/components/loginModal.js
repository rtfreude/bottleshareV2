/*import React from 'react';
import { showModal } from '../actions/index'

const LoginModal = () => (

  <div>
    <a className="waves-effect waves-light btn modal-trigger" data-target="modal1" onClick={()=>this.props.actions.showModal}>Modal</a>

    <div data-target="modal1" className="modal">
      <div className="modal-content">
        <li><a href="/auth/google">Google Login</a></li>
        <li><a href="/auth/facebook">Facebook Login</a></li>
        <li><a href="/auth/linkedin">Linkedin Login</a></li>
      </div>
    </div>
  </div>
);


export default connect(export default connect(
  (state, ownProps) => ({
    post: state.postsById[ownProps.postId]
  }))(LoginModal)*/


import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setNameAndHideModal, showModal, hideModal } from '../actions'
import ConfirmModal from './ConfirmModal'

class LoginModal extends Component {

  render() {
    let { showModal, onConfirm, hideModal, name } = this.props
    return (
      <div>
        <button className="btn" onClick={() => showModal("Login")}>Login!</button>
        <ConfirmModal message="Login" onConfirm={onConfirm} onCancel={hideModal}></ConfirmModal>
      </div>
    )
  }
}

const mapStateToComponent = (state) => {
  return {
    name: state.name
  }
}

const mapDispatchToComponent = (dispatch) => {
  return {
    showModal: (message) => dispatch(showModal(message)),
    hideModal: () => dispatch(hideModal())
  }
}

export default connect(mapStateToComponent, mapDispatchToComponent)(LoginModal)