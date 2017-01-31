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
        	<h1>Analytics</h1>
      	</div>
      	<table className="table">
      		<tr>
		        <th>IP Address</th>
		        <th>Search Query</th>
		        <th>Count</th>
		      </tr>
      		{searches}
      	</table>
      </div>
    );
  }

};

export default Analytics;
