import React from 'react';
import SearchStore from './../stores/SearchStore';
import SearchActions from './../actions/SearchActions';
import AnalyticsItem from './AnalyticsItem';

function getAnalyticsItem(search) {
  return (
    <AnalyticsItem key={search.id} search={search} />
  );
}

class Analytics extends React.Component {

	constructor(props) {
    super(props);
    this.state = { 
      searches: []
    };
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    SearchStore.addChangeListener(this.onChange);
  }

  componentDidMount() {
    SearchActions.getSearches();
  }

  componentWillUnmount() {
    SearchStore.removeChangeListener(this.onChange);
  }

  handleClearAnalytics() {
    SearchActions.clearAnalytics();
  }

  onChange() {
    this.setState({
      searches: SearchStore.getSearches()
    });
  }
  
  render() {

  	let searches;
    
    if (this.state.searches) {
      searches = this.state.searches.map((search, i) => getAnalyticsItem(search));
    }

    return (
      <div>
        <div className="page-header">
        	<h1>Analytics <button className="btn btn-info pull-right" onClick={this.handleClearAnalytics}>Clear Analytics</button></h1>
      	</div>
      	<table className="table">
          <thead>
        		<tr>
  		        <th>IP Address</th>
  		        <th>Search Query</th>
  		        <th>Count</th>
  		      </tr>
          </thead>
          <tbody>
      		  {searches}
          </tbody>
      	</table>
      </div>
    );
  }

};

export default Analytics;
