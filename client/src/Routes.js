import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Articles from './components/Articles';
import Analytics from './components/Analytics';
import NotFound from './components/Notfound';

module.exports = (
	<Route path="/" component={App}>
		<IndexRoute component={Articles} />
    <Route path="/analytics" component={Analytics} />
    <Route path="*" component={NotFound} />
  </Route>
);