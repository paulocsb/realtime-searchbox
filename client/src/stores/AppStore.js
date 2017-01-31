import AppDispatcher from './../dispatcher/AppDispatcher';
import { RECIEVE_ERROR, RECEIVE_ARTICLES, RECEIVE_SEARCH } from './../constants/Constants';
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

class AppStoreClass extends EventEmitter {

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

const AppStore = new AppStoreClass();

AppStore.dispatchToken = AppDispatcher.register(action => {

  switch(action.actionType) {
    case RECEIVE_ARTICLES:
      setArticles(action.articles);
      AppStore.emitChange();
      break

    case RECEIVE_SEARCH:
      AppStore.emitChange();
      break

    case RECIEVE_ERROR:
      setError(action.message);
      AppStore.emitChange();
      break

    default:
  }

});

export default AppStore;