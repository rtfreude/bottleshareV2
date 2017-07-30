import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header'
import Landing from './Landing'
import Dashboard from './Dashboard'

import './app.css'

class App extends Component {

  componentDidMount () {
    console.log('didmountprops', this.props)
    this.props.fetchUser();
  }

  render() {
    return (
      <div className='app-container'>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path='/' component={Landing} />
            <Route exact path='/dashboard' component={Dashboard} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, actions)(App);