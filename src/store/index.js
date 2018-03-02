import {createStore,applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers'
import logger from 'redux-logger' 
import thunkMiddleware from 'redux-thunk' 

export default  function configureStore(initialState) {

  const middleware = [thunkMiddleware, logger]
 
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware),)
  )
  return store
}