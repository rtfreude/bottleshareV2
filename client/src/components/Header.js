import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './header.css'

class Header extends Component {

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
                <div>
                  <li><a href="/auth/google">Google Login</a></li>
                  <li><a href="/auth/facebook">Facebook Login</a></li>
                  <li><a href="/auth/linkedin">Linkedin Login</a></li>
                </div>
               )
      default:
        return <li><a href="/api/logout">Logout</a></li>;
    }
  }

  render() {

    return (
       <nav className="header-nav">
        <div className="nav-wrapper N/A transparent">
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