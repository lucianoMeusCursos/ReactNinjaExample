import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const logger = ({dispatch, getState}) => (next) => (action) => {
  console.group(`LOGGER->${action.type}`)
  console.log('will dispatch:', action)
  console.log('state: ', getState())
  const nextAction = next(action)
  console.log('next state: ', getState())
  console.groupEnd(`LOGGER->${action.type}`)
  return nextAction
}

export default ({ initialState } = {}) => {
  const store = createStore(rootReducer, initialState, applyMiddleware(logger, thunk))
  return store
}




