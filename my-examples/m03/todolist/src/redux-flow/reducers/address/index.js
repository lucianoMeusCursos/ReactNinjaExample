import createReducer from '../create-reducer';
import { FETCHING, SUCCESS } from './actions'

const initialState = {
  address: '',
  city: '',
  code: '',
  isFetching: false,
  district: '',
  message: '',
  ok: '',
  state: '',
  status: '',
  statusText: ''
}

const address = createReducer(initialState, {
  [FETCHING]: (state, action) => ({
    ...state,
    isFetching: true
  }),

  [SUCCESS]: (state, action) => ({
    ...action.payload,
    isFetching: false
  })
})

export default address
