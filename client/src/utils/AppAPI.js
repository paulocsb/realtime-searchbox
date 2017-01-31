import Axios from 'axios';

export default {
  
  get: (url) => {
    return new Promise((resolve, reject) => {
      var _axios = Axios.create();
      _axios.get(url)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
    });
  }
}