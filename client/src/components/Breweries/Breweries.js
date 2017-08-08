import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';
import './breweries.css';

class Breweries extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }


  render() {
    return (
      <div>
        <h1>Breweries!!!</h1>
      </div>
    )
  }
}
function mapStateToProps({ beer }) {
  return { beer }
}

export default connect(mapStateToProps)(Breweries)