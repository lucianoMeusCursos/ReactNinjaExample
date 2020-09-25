import createReducer from '../create-reducer';
import { UPDATE_ADDRESS } from './actions'

const initialState = {
  address: '',
  city: '',
  code: '',
  district: '',
  ok: true,
  state: '',
  status: 200,
  statusText: '',
  message: ''
}

const address = createReducer(initialState, {
  [UPDATE_ADDRESS]: (state, action) => action.payload
})

export default address
