import QueryString from 'query-string';
import 'whatwg-fetch';


export default class Http {
  static send(url, option, resolve, reject, errorCallback) {
    const param = {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      requestSerializerType: '1',
      body: null
    };
    Object.assign(param, option);


    let _url = url;

    if (param.body) {
      if (param.method === 'GET') {
        param.body = QueryString.stringify(param.body);
        _url += (_url.indexOf('?') > 0 ? `&${param.body}` : `?${param.body}`);
        param.body = null;
      } else if (param.method === 'POST') {
        param.body = JSON.stringify(param.body);
      }
    }
    console.log(_url + param);
    return fetch(_url, param)
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          return response;
        }
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
      })
      .then((res) => {
        res.json().then((data) => {
          resolve(data, res);
        }).catch(() => {
          reject();
        });
      })
      .catch((e) => {
        console.log(e);
        // Toast.hide();
        if (errorCallback && typeof errorCallback === 'function') {
          console.log(e, ' errorCallback');
          errorCallback();
        }
      });
  }

  static get(url, option = {}, errorCallback) {
    return new Promise((resolve, reject) => {
      Http.send(url, option, resolve, reject, errorCallback);
    });
  }

  static post(url, option = {}, errorCallback) {
    Object.assign(option, {
      method: 'POST'
    });
    return new Promise((resolve, reject) => {
      Http.send(url, option, resolve, reject, errorCallback);
    });
  }
}
