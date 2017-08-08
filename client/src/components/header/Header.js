import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './header.css';
import LogModal from '../loginmodal/Modal'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  close() {
    this.setState({showModal: false})
  }

  open() {
    console.log('open')
    this.setState({showModal: true})
  }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
                <div>
                <a className="waves-effect waves-light btn" onClick={this.open}><i className="material-icons right">menu</i>Login</a>
                </div>
               )
      default:
        return (
                <div>
                  <li>
                    <Link
                    to='/beer'
                    >
                    Search Beer
                    </Link>
                  </li>
                  <li><a href="/api/logout">Logout</a></li>
                </div>
                )
    }
  }

  render() {
    return (
      <div>
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
        {
          this.state.showModal
            ? <LogModal
              showModal={this.state.showModal}
              close={this.close}
              open={this.open}
            />
            : null
        }
      </nav>
      {
          this.state.showModal
            ? <LogModal
              showModal={this.state.showModal}
              close={this.close}
              open={this.open}
            />
            : null
        }
        </div>
    )
  }
}
function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Header)