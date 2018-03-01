import * as actionTypes from '../constants';

const initialState = {
  message: '默认信息'
};


function errorReducer(state = initialState, action) {
  let result = null;
  switch (action.type) {
    case actionTypes.ERROR_401:
      result = state;
      console.warn('未登录,正在跳转至登录页面.', action);
      break;
    case actionTypes.ERROR_500:
      result = state;
      console.warn('服务端出错,请联系管理员.', action);
      break;
    default:
      // console.warn('未定义的异常', action);
      result = state;
  }

  return result;
}

export default errorReducer;
