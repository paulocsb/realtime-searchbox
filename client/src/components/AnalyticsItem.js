import React from 'react';

class AnalyticsItem extends React.Component {
  
  render() {

    const { search } = this.props;

    return (
      <tr>
        <td>{search.ip_address}</td>
        <td>{search.query}</td>
        <td>{search.searches_count}</td>
      </tr>
    );
  }

};

export default AnalyticsItem;
