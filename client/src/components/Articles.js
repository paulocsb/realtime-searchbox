import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import AppStore from './../stores/AppStore';
import SearchActions from './../actions/SearchActions';
import Article from './Article';

function getArticles(article) {
  return (
    <Article key={article.id} article={article} />
  );
}

class Articles extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      articles: []
    };
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    AppStore.addChangeListener(this.onChange);
  }

  componentDidMount() {
    SearchActions.getArticles();
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      articles: AppStore.getArticles()
    });
  }

  render() {

    let articles;
    
    if (this.state.articles) {
      articles = this.state.articles.map((article, i) => getArticles(article));
    }

    return (
      <div>
        {articles}
      </div>
    );
  }

};

export default Articles;
