import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBeer, fetchBeerDetails } from '../../actions/index';
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
      beerStyle: '',
      beerDesc: '',
      beerTaste: '',
      beerImg: '',
      beerAbv: '',
      srmMax: '',
      gravity: '',
      ibu: ''
    }
    this.onUpdateInput = this.onUpdateInput.bind(this);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.toggleModal = this.toggleModal.bind(this)
    this.getDetails = this.getDetails.bind(this)
  }

  close() {
    this.setState({showModal: false})
  }

  open() {
    this.setState({showModal: true})
  }

  onUpdateInput(inputValue) {
    const self = this;
    self.setState({
      inputValue: inputValue
    })

    self.props.fetchBeer(inputValue)
      .then(() => self.performSearch())
      .catch(err => console.log('input error occurred: ' + err))
  }


  getDetails () {
    const self = this;
    self.props.fetchBeerDetails(this.state.inputValue)
      .then(() => self.beerCall())
      .then(() => self.toggleModal())
      .catch(err => console.log('get details error: ' + err))



  }

  toggleModal () {
    const self = this;
    self.setState({
      showModal: !self.state.showModal,
      inputValue: ''
    })
  }


  componentDidMount() {
    const self = this;
    self.beerCall(self.state.inputValue);

  }

  performSearch() {
    const self = this;
    console.log(this.props.beer)
    if(this.state.inputValue !== '') {
        //console.log('perform search', this.props.beer)
        self.setState({
          dataSource: this.props.beer
        });
    }
  }

  beerCall() {
      let beerInfo = this.props.beerDetails
      let srm;
      let fg;
      let description;
      let taste;
      let shortName;
      let abv;
      let image;
      console.log('beercall beerinfo', this.props.beerDetails)
      if(beerInfo.style !== undefined) {
        srm = (+beerInfo.style.srmMax+(+beerInfo.style.srmMin))/2;
        taste = beerInfo.style.description;
        shortName = beerInfo.style.shortName;
      } else {
        srm = 'No SRM'
        taste = 'No Description'
        shortName = 'No Name'
      }

      if(beerInfo.style !== undefined) {
        fg = parseFloat((+beerInfo.style.fgMax+(+beerInfo.style.fgMin))/2).toFixed(4);
      } else {
        fg = 'No fg'
      }

      if(beerInfo.description !== undefined) {
        description = beerInfo.description;
      } else {
        description = 'No description available...'
      }

      if(beerInfo.labels !== undefined) {
        image = beerInfo.labels.medium;
      } else {
        image = 'beer.jpg'
      }

      this.setState({
        beerName: beerInfo.name,
        displayName: beerInfo.name,
        beerDesc: description,
        beerTaste: taste,
        beerImg: image,
        beerStyle: shortName,
        beerAbv: beerInfo.abv,
        srmMax: srm,
        gravity: fg,
        ibu: beerInfo.ibu
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
              onNewRequest      = {this.getDetails}
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

function mapStateToProps({ beer, beerDetails }) {
  //console.log('beerDetails', beerDetails)
  return { beer, beerDetails }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchBeer: fetchBeer,
    fetchBeerDetails: fetchBeerDetails
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Beer)



