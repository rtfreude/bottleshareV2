import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LoginModal from './loginModal';
import RootModal from './RootModal'
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
                  <LoginModal />
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

export default connect(mapStateToProps)(Header)