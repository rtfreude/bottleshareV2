import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom';
import RootModal from './RootModal';
import { showModal } from '../actions/index'
import './header.css';
//import $ from 'jquery'

class Header extends Component {

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
                <div>
                  <a className="waves-effect waves-light btn modal-trigger" data-target="modal1" onClick={()=>this.props.actions.dispatch(this.props.actions.showModal)}>Modal</a>
                  <RootModal />
                </div>
               )
      default:
        return <li><a href="/api/logout">Logout</a></li>;
    }
  }

  render() {

    return (
       <nav className="header-nav">
        <div className="nav-wrapper black">
          <Link
            to={this.props.auth ? '/dashboard' : '/'}
            className="left brand-logo"
            >
            BottleShare
          </Link>
          <ul className="right">
              {this.renderContent()}
          </ul>
        </div>
      </nav>
    )
  }
}
function mapStateToProps({ auth, loginModal }) {
  return { auth, loginModal }
}

/*function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}*/

export default connect(mapStateToProps, { showModal })(Header)