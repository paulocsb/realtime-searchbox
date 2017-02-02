import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link } from 'react-router';
import ActionCable from 'actioncable';

const actionCable = ActionCable.createConsumer('ws://rails.application.com:3100/cable');

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cable: actionCable
    }
  }

  render() {
    return (
      <div className="col-md-6 col-md-offset-3">
        <br />
        <div className="text-right">
          <Link to="/"><i className="glyphicon glyphicon-list-alt"></i> Articles</Link>&nbsp;&nbsp;| &nbsp;&nbsp;
          <Link to="/analytics"><i className="glyphicon glyphicon-signal"></i> Analytics (Live stream)</Link>
        </div>
        <div className="page-header">
          <h1>Realtime Search Box</h1>
          <span>Ruby on Rails + React JS + Elastic Search</span>
        </div>
        {React.cloneElement(this.props.children, {cable: this.state.cable})}
      </div>
    );
  }
};

export default App;
