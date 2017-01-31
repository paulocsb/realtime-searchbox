import React from 'react';
import ArticleStore from './../stores/ArticleStore';
import ArticleActions from './../actions/ArticleActions';
import Search from './Search';
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
    this.handleNewRequest = this.handleNewRequest.bind(this);
  }

  componentWillMount() {
    ArticleStore.addChangeListener(this.onChange);
  }

  componentDidMount() {
    ArticleActions.getArticles();
  }

  componentWillUnmount() {
    ArticleStore.removeChangeListener(this.onChange);
  }

  handleNewRequest(query) {
    ArticleActions.searchArticles(query);
  }

  onChange() {
    this.setState({
      articles: ArticleStore.getArticles()
    });
  }

  render() {

    let articles;
    
    if (this.state.articles) {
      articles = this.state.articles.map((article, i) => getArticles(article));
    }

    return (
      <div>
        <div className="text-center">
          <h1>HELPJUICE</h1>
          <Search NewRequest={this.handleNewRequest} />
        </div>
        <hr />
        {articles}
      </div>
    );
  }

};

export default Articles;
