import AppDispatcher from './../dispatcher/AppDispatcher';
import { RECIEVE_ERROR, RECEIVE_SEARCH, CLEAR_SEARCH } from './../constants/Constants';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

let _searches = [];
let _error = '';

function setSearches(searches) {
  _searches = searches;
}

function setError(error) {
  return _error;
}

class SearchStoreClass extends EventEmitter {

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback)
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  }

  getSearches() {
    return _searches;
  }

  getError() {
    return _error;
  }
}

const SearchStore = new SearchStoreClass();

SearchStore.dispatchToken = AppDispatcher.register(action => {

  switch(action.actionType) {
    case RECEIVE_SEARCH:
      setSearches(action.searches);
      SearchStore.emitChange();
      break

    case CLEAR_SEARCH:
      setSearches(action.searches);
      SearchStore.emitChange();
      break

    case RECIEVE_ERROR:
      setError(action.message);
      SearchStore.emitChange();
      break

    default:
  }

});

export default SearchStore;