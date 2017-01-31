import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Routes from './Routes.js';

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
  	<Router history={browserHistory}>{Routes}</Router>
	</MuiThemeProvider>,
  document.getElementById('root')
);
