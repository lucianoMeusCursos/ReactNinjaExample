'use strict'

var arr = [1, 2, 3]
var plusOne = (item) => item + 1

plusOne(1)
plusOne(3)

arr.map(plusOne)

arr.map((item, index, array) => ({item, index, array }))
