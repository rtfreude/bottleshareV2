import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import { Link } from 'react-router-dom';
import { fetchBeer } from '../../actions/index';
import './beer.css';




class Beer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick () {
    this.props.fetchBeer();
  }

  render() {
    return (
      <div>
        <h1>BEER!!!</h1>
        <a
        onClick={this.handleClick}
        className="waves-effect waves-light btn-large"
        >
        Button
        </a>
      </div>
    )
  }
}
function mapStateToProps({ beer }) {
  return { beer }
}

const mapDispatchToProps = (dispatch) => {

  return bindActionCreators({
    fetchBeer: fetchBeer
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Beer)