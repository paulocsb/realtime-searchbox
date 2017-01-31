import AppDispatcher from './../dispatcher/AppDispatcher';
import { RECIEVE_ERROR, RECEIVE_ARTICLES } from './../constants/Constants';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

let _articles = [];
let _error = '';

function setArticles(articles) {
  _articles = articles;
}

function setError(error) {
  return _error;
}

class ArticleStoreClass extends EventEmitter {

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback)
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  }

  getArticles() {
    return _articles;
  }

  getError() {
    return _error;
  }
}

const ArticleStore = new ArticleStoreClass();

ArticleStore.dispatchToken = AppDispatcher.register(action => {

  switch(action.actionType) {
    case RECEIVE_ARTICLES:
      setArticles(action.articles);
      ArticleStore.emitChange();
      break

    case RECIEVE_ERROR:
      setError(action.message);
      ArticleStore.emitChange();
      break

    default:
  }

});

export default ArticleStore;