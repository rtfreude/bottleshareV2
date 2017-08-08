import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBeer } from '../../actions/index';
import $                    from 'jquery';
import { AutoComplete }     from 'material-ui';
import getMuiTheme          from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider     from 'material-ui/styles/MuiThemeProvider';
import ModalBeer            from './ModalBeer';

import './beer.css';

let injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

class Beer extends Component {
  constructor(props) {
    super(props);
     this.state = {
      showModal: false,
      beerName: 'Naughty 90',
      inputValue: '',
      displayName: 'Naughty 90',
      dataSource: [],
      beerStyle: ''
    }
    this.onUpdateInput = this.onUpdateInput.bind(this);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.toggleModal = this.toggleModal.bind(this)
  }

  close() {
    this.setState({showModal: false})
  }

  open() {
    this.setState({showModal: true})
  }

  onUpdateInput(inputValue) {
    const self = this;
    this.setState({
      inputValue: inputValue
    }, function() {
      this.props.fetchBeer(inputValue);
      self.performSearch();
    })
  }

  toggleModal () {
    const self = this;
    self.beerCall();
    self.setState({
      showModal: !self.state.showModal
    })
  }

  componentDidMount() {
    this.beerCall(this.state.inputValue);
  }

  performSearch() {
    const self = this;

    if(this.state.inputValue !== '') {
        console.log('perform search', this.props.beer)
        self.setState({
          dataSource: this.props.beer
        });
    }
  }

  beerCall() {
    return $.get('/beername', {beerRequest: this.state.inputValue})
    .then((data) => {
      console.log('beerCall', data)
      let srm;
      let fg;
      let description;
      let taste;
      let shortName;
      let abv;
      let image;

      if(data.data[0].style !== undefined) {
        srm = (+data.data[0].style.srmMax+(+data.data[0].style.srmMin))/2;
        taste = data.data[0].style.description;
        shortName = data.data[0].style.shortName;
      } else {
        srm = 'No SRM'
        taste = 'No Description'
        shortName = 'No Name'
      }

      if(data.data[0].style !== undefined) {
        fg = parseFloat((+data.data[0].style.fgMax+(+data.data[0].style.fgMin))/2).toFixed(4);
      } else {
        fg = 'No fg'
      }

      if(data.data[0].description !== undefined) {
        description = data.data[0].description;
      } else {
        description = 'No description available...'
      }

      if(data.data[0].labels !== undefined) {
        image = data.data[0].labels.medium;
      } else {
        image = 'beer.jpg'
      }

      this.setState({
        beerName: data.data[0].name,
        displayName: data.data[0].name,
        beerDesc: description,
        beerTaste: taste,
        beerImg: image,
        beerStyle: shortName,
        beerAbv: data.data[0].abv,
        srmMax: srm,
        gravity: fg,
        ibu: data.data[0].ibu
      })
    })
  }

    render() {
    return (
      <div className="beer-search">
        <h3>Beer Quick Search!</h3>
        <div className="input-group">
          <MuiThemeProvider muiTheme={getMuiTheme()}>
            <AutoComplete
              hintText          = "Input beer..."
              dataSource        = {this.state.dataSource}
              filter            = {AutoComplete.noFilter}
              //onTouchTap        = {this.handleClick}
              onUpdateInput     = {this.onUpdateInput}
              onNewRequest      = {this.toggleModal}
              floatingLabelText = "Input beer name and hit enter..."
            />
          </MuiThemeProvider>
        </div>
        {
          this.state.showModal
            ? <ModalBeer
              showModal={this.state.showModal}
              close={this.close}
              open={this.open}
              beerName     = {this.state.beerName}
              displayName  = {this.state.displayName}
              beerDesc     = {this.state.beerDesc}
              beerTaste    = {this.state.beerTaste}
              beerImg      = {this.state.beerImg}
              beerStyle    = {this.state.beerStyle}
              beerAbv      = {this.state.beerAbv}
              srmMax       = {this.state.srmMax}
              gravity      = {this.state.gravity}
              ibu          = {this.state.ibu}
            />
            : null
        }
      </div>
    );
  }
}

function mapStateToProps({ beer }) {
  console.log('beer', beer)
  return { beer }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchBeer: fetchBeer
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Beer)