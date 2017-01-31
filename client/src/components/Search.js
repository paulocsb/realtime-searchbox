import React from 'react';
import SearchStore from './../stores/SearchStore';
import SearchActions from './../actions/SearchActions';
import AutoComplete from 'material-ui/AutoComplete';

class Search extends React.Component {

	constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
      searchText: ''
    };

    this.onChange = this.onChange.bind(this);
    this.handleUpdateInput = this.handleUpdateInput.bind(this);
    this.handleNewRequest = this.handleNewRequest.bind(this);
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

  handleUpdateInput(value) {
    this.setState({
      dataSource: [
        value
      ],
      searchText: value
    });
  }

  handleNewRequest() {
    this.props.NewRequest(this.state.searchText);
  }

  onChange() {
    this.setState({
      dataSource: SearchStore.getSearches()
    });
  }

	render() {
		return (
			<div>
        <AutoComplete
          hintText="Type anything"
          searchText={this.state.searchText}
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
          onNewRequest={this.handleNewRequest}
          floatingLabelText="Search for..."
          fullWidth={true}
          filter={AutoComplete.fuzzyFilter}
          maxSearchResults={3}
          openOnFocus={true}
        />
      </div>
		);
	}
};

export default Search;