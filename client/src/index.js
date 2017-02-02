import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Routes from './Routes.js';

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
  	<Routes />
	</MuiThemeProvider>,
  document.getElementById('root')
);
