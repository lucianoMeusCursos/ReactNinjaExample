
import createReducer from '../create-reducer'
import { SET_VISIBILITY_FILTER, SHOW_ALL } from './actions';

 const initialState = SHOW_ALL

const visibilityFilter = createReducer(initialState, {
  [SET_VISIBILITY_FILTER]: (state, action) => action.payload.filter
})

// Modelo convecional sem fazer o createReducer.
// const visibilityFilter = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       return action.payload.filter

//     default:
//       return state
//   }
// }

export default visibilityFilter
