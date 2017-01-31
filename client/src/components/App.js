import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

class App extends React.Component {

  render() {
    return (
      <div className="col-md-6 col-md-offset-3">
        {this.props.children}
      </div>
    );
  }

};

export default App;
