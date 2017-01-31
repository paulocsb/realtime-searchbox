import React from 'react';

class Article extends React.Component {
  
  render() {

    const { article } = this.props;

    return (
      <div>
        <h2>{article.title}</h2>
        <p className="text-justify">{article.context}</p>
      </div>
    );
  }

};

export default Article;
