import {createStore,compose,applyMiddleware} from 'redux'
import rootReducer from '../reducers'
import createHistory from 'history/createHashHistory'
import { routerMiddleware } from 'react-router-redux'
import logger from 'redux-logger' 
import thunkMiddleware from 'redux-thunk' 

export default  function configureStore(initialState) {
  const history = createHistory()
  const middleware = routerMiddleware(history)
  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(middleware, thunkMiddleware, logger),
      window.devToolsExtension 
        ? window.devToolsExtension() 
        : undefined)
  )
  return store
}