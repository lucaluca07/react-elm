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
        }else {
          // 异常处理
          switch (response.status) {
            case 401:
              return {
                code: 401,
                message: '请登录后再试.',
                type: 'ERROR_401'
              };
            default:
              return {
                code: response.status,
                message: '服务端通信出错,请与管理员联系.',
                type: 'ERROR_500'
              };
          }
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
        if (errorCallback && typeof errorCallback === 'function') {
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
