import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      dataSuggest: [
        'Teste',
        'SelaKuatro',
        'Pagodart',
        'Igor Kannario',
        'Leo Santanna',
        'Harmonia do Samba'
      ]
    };
    this.handleUpdateInput = this.handleUpdateInput.bind(this);
  }

  handleUpdateInput(value) {
    this.setState({
      dataSource: [
        value,
        this.state.dataSuggest
      ],
    });
  }

  render() {
    return (
      <div className="col-md-6 col-md-offset-3">
        <div className="text-center">
          <h1>HELPJUICE</h1>
          <form>
            <AutoComplete
              hintText="Type anything"
              dataSource={this.state.dataSuggest}
              onUpdateInput={this.handleUpdateInput}
              floatingLabelText="Search for..."
              fullWidth={true}
              filter={AutoComplete.fuzzyFilter}
              maxSearchResults={5}
            />
          </form>
        </div>
        <hr />
        {this.props.children}
      </div>
    );
  }

};

export default App;
