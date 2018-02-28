import {createStore,compose,applyMiddleware} from 'redux'
import rootReducer from '../reducers'
import logger from 'redux-logger' 
import thunkMiddleware from 'redux-thunk' 

export default  function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(thunkMiddleware, logger),
      window.devToolsExtension 
        ? window.devToolsExtension() 
        : undefined)
  )
  return store
}