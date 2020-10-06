import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import address from './index'
import { FETCHING, SUCCESS } from './actions'

it('should action SUCCESS update address', () => {
  const before = deepFreeze({
    address: '',
    city: '',
    code: '',
    district: '',
    isFetching: true,
    message: '',
    ok: true,
    state: '',
    status: 200,
    statusText: ''
  })

  const action = deepFreeze({
    type: SUCCESS,
    payload: {
      address: "Rua Amadeu João Penzin",
      city: "Rio de Janeiro",
      code: "21520-620",
      district: "Pavuna",
      message: '',
      ok: true,
      state: "RJ",
      status: 200,
      statusText: "ok"
    }
  })

  const after = deepFreeze({
    address: "Rua Amadeu João Penzin",
    city: "Rio de Janeiro",
    code: "21520-620",
    district: "Pavuna",
    isFetching: false,
    message: '',
    ok: true,
    state: "RJ",
    status: 200,
    statusText: "ok"
  })

  expect(address(before, action)).to.be.deep.equal(after)
})
