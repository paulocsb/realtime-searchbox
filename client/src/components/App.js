import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {

  render() {
    return (
      <div className="col-md-6 col-md-offset-3">
        <br />
        <div className="text-right">
          <Link to="/"><i className="glyphicon glyphicon-list-alt"></i> Articles</Link>&nbsp;&nbsp;| &nbsp;&nbsp;
          <Link to="/analytics"><i className="glyphicon glyphicon-signal"></i> Analytics</Link>
        </div>
        <div className="page-header">
          <h1>Realtime Search Box</h1>
          <span>Ruby on Rails + React JS + Elastic Search</span>
        </div>
        {this.props.children}
      </div>
    );
  }

};

export default App;
