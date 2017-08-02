import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';
//import { showModal } from '../actions/index'
import './header.css';
//import $ from 'jquery'

class Header extends Component {

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
                <LoginModal />
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
function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Header)