import React from 'react';
import { connect } from 'react-redux';
import showModal from '../actions'

const LoginModal = ({dispatch, showModal}) => (
  <div>
  {console.log('modalprops', this.loginModal)}
    <li><a href="/auth/google">Google Login</a></li>
    <li><a href="/auth/facebook">Facebook Login</a></li>
    <li><a href="/auth/linkedin">Linkedin Login</a></li>

    <a className="waves-effect waves-light btn modal-trigger" data-target="modal1" onClick={()=>dispatch(showModal)}>Modal</a>
    <div data-target="modal1" className="modal">
      <div className="modal-content">
        <h4>Modal Header</h4>
        <p>A bunch of text</p>
      </div>
      <div className="modal-footer">
        <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
      </div>
    </div>

  </div>
);



function mapStateToProps({ loginModal }) {
  console.log('state', loginModal)
  return { loginModal }
}

export default connect(mapStateToProps)(LoginModal)


