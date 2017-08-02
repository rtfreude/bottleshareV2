import React, { Component } from 'react';
import { connect } from 'react-redux';
import './confirmModal.css'

class ConfirmModal extends Component {

  render() {
    let {  onCancel, isShowing } = this.props

    return (
      <div className="confirm-modal">
        { isShowing &&
          <div>
            <div className="modal-backdrop"></div>
            <div className="confirm-modal-content">
              <li><a href="/auth/google">Google Login</a></li>
              <li><a href="/auth/facebook">Facebook Login</a></li>
              <li><a href="/auth/linkedin">Linkedin Login</a></li>
            </div>
          </div>
        }
      </div>
    )
  }
}

const mapStateToComponent = (state) => {
  return {
    isShowing: state.modals.isShowing
  }
}

export default connect(mapStateToComponent)(ConfirmModal)