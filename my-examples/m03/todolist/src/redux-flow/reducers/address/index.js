import createReducer from '../create-reducer';
import { UPDATE_ADDRESS } from './actions'

const initialState = {
  address: '',
  city: '',
  code: '',
  district: '',
  ok: '',
  state: '',
  status: '',
  statusText: '',
  message: ''
}

const address = createReducer(initialState, {
  [UPDATE_ADDRESS]: (state, action) => action.payload
})

export default address
