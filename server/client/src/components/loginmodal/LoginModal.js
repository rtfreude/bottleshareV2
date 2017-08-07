import React, { Component } from 'react';
import $                    from 'jquery';
import { AutoComplete }     from 'material-ui';
import getMuiTheme          from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider     from 'material-ui/styles/MuiThemeProvider';
import ModalBeer            from '../ModalBeer/ModalBeer'


var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

class LoginModal extends Component {

  render() {
    return (
      <div className="beer-search">
      <Button>Default button</Button>

        {
          this.state.showModal
            ? <ModalBeer
              showModal={this.props.showModal}
              close={this.props.close}
              open={this.props.open}
            />
            : null
        }
      </div>
    );
  }
}

export default LoginModal;