'use strict'

import { expect } from 'chai'
import pagination from './index'

test('pagination should be a function', () => { // checando se é uma função
  expect(pagination).to.be.a('function')
})

test('pagination({ total: 1, activePage: 1 }) should return [1]', () => { // checando o total de paginas
  const params = { total: 1, activePage: 1 }
  const result = [1]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({ total: 2, activePage: 1 }) should return [1]', () => { // checando o total de paginas
  const params = { total: 2, activePage: 1 }
  const result = [1, 2]
  expect(pagination(params)).to.be.deep.equal(result)
})