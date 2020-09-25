import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import address from './index'
import { UPDATE_ADDRESS }from './actions'

it('should action UPDATE_ADDRESS update address', () => {
  const before = deepFreeze({
    address: '',
    city: '',
    code: '',
    district: '',
    ok: true,
    state: '',
    status: 200,
    statusText: '',
    message: ''
  })

  const action = deepFreeze({
    type: UPDATE_ADDRESS,
    payload: {
      address: "Rua Amadeu João Penzin",
      city: "Rio de Janeiro",
      code: "21520-620",
      district: "Pavuna",
      ok: true,
      state: "RJ",
      status: 200,
      statusText: "ok",
      message: ''
    }
  })

  const after = deepFreeze({
    address: "Rua Amadeu João Penzin",
    city: "Rio de Janeiro",
    code: "21520-620",
    district: "Pavuna",
    ok: true,
    state: "RJ",
    status: 200,
    statusText: "ok",
    message: ''
  })

  expect(address(before, action)).to.be.deep.equal(after)
})
