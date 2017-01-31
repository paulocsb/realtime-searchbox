import Axios from 'axios';

export default {
  
  get: (url, params={}) => {
    return new Promise((resolve, reject) => {
      var _axios = Axios.create();
      _axios.get(url,params)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
    });
  }
}