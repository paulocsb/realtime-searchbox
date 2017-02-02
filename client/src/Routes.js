import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import App from './components/App';
import Articles from './components/Articles';
import Analytics from './components/Analytics';
import NotFound from './components/Notfound';

const Routes = (props = {}) => {

	return (
		<Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Articles} />
		    <Route path="/analytics" component={Analytics} />
		    <Route path="*" component={NotFound} />
		  </Route>
  	</Router>
  );
};

export default Routes;