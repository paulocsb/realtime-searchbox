import { API_URL, RECEIVE_SEARCH, CLEAR_SEARCH, RECIEVE_ERROR } from './../constants/Constants';
import AppDispatcher from './../dispatcher/AppDispatcher';
import AppAPI from './../utils/AppAPI';

export default {

  clearAnalytics: () => {
    return new Promise((resolve, reject) => {
  
      AppAPI.get(API_URL + 'searches/clear')
      .then(response => {
        AppDispatcher.dispatch({
          actionType: CLEAR_SEARCH,
          searches: response.searches
        });
        resolve(response);
      })
      .catch(error => {
        AppDispatcher.dispatch({
          actionType: RECIEVE_ERROR,
          message: error.responseText
        });
        reject('error');
      });

    });
  },

  getSearches: () => {
  
    return new Promise((resolve, reject) => {
  
      AppAPI.get(API_URL + 'searches/')
      .then(response => {
        AppDispatcher.dispatch({
          actionType: RECEIVE_SEARCH,
          searches: response.searches
        });
        resolve(response);
      })
      .catch(error => {
        AppDispatcher.dispatch({
          actionType: RECIEVE_ERROR,
          message: error.responseText
        });
        reject('error');
      });

    });

  },
}
