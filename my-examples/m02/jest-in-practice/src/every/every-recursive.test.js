'use strict'

import { expect } from 'chai'
import every from './every-recursive.js'

it('every should be a function', () => {
  expect(every).to.be.a('function')
})

it('every([], (item) => item) should return false', () => {
  expect(every([], (item) => item)).to.be.ok
})

it('every([0, 2, 3], (item) => item) should return false', () => {
  expect(every([0, 2, 3], (item) => item)).to.not.be.ok
})

it('every([1, 2, 3], (item) => item) should return true', () => {
  expect(every([1, 2, 3], (item) => item)).to.be.ok
})

it('every([1, 2, 3], (item, index) => item === index - 1) should return true', () => {
  expect(every([1, 2, 3], (item, index) => item === index - 1)).to.not.be.ok
})

it('every([1, 2, 3], (item, index, array) => array.length === 3) should return true', () => {
  expect(every([1, 2, 3], (item, index, array) => array.length === 3)).to.be.ok
})
