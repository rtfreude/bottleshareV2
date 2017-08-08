import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './header/Header';
import Landing from './landing/Landing';
import Dashboard from './dashboard/Dashboard';
import Beer from './Beer/Beer';

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
            <Route exact path='/beer' component={Beer} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, actions)(App);