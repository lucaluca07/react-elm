import QueryString from "query-string";
import "whatwg-fetch";

export default class Http {
  static async send(url, option) {
    const param = {
      method: "GET",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      requestSerializerType: "1",
      body: null
    };
    Object.assign(param, option);

    let _url = url;

    if (param.body) {
      if (param.method === "GET") {
        param.body = QueryString.stringify(param.body);
        _url += _url.indexOf("?") > 0 ? `&${param.body}` : `?${param.body}`;
        param.body = null;
      } else if (param.method === "POST") {
        param.body = JSON.stringify(param.body);
      }
    }
    console.log(_url, param);
    const response = await fetch(_url, param);
    const { status } = response;
    let result;
    if (status >= 200 && status < 300) {
      result = await response.json();
    } else {
      // 异常处理
      switch (status) {
        case 401:
          result = {
            code: 401,
            message: "请登录后再试.",
            type: "ERROR_401"
          };
          break;
        default:
          result = {
            code: status,
            message: "服务端通信出错,请与管理员联系.",
            type: "ERROR_500"
          };
      }
      return Promise.reject(result);
    }
    return {
      result,
      response: {
        status: response.status
        //TODO: 需要增加其他状态信息
      }
    };
  }

  static get(url, option = {}) {
    return Http.send(url, option);
  }

  static post(url, option = {}) {
    Object.assign(option, {
      method: "POST"
    });
    return Http.send(url, option);
  }
}
