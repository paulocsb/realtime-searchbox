import { API_URL, RECEIVE_ARTICLES, RECIEVE_ERROR } from './../constants/Constants';
import AppDispatcher from './../dispatcher/AppDispatcher';
import AppAPI from './../utils/AppAPI';

export default {

  getArticles: () => {
  
    return new Promise((resolve, reject) => {
  
      AppAPI.get(API_URL + 'articles/')
      .then(response => {
        AppDispatcher.dispatch({
          actionType: RECEIVE_ARTICLES,
          articles: response.articles
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
