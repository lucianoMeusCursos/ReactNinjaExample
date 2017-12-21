'use strict'

const map = (arr = [], func = (item) => item) => {
  if(!Array.isArray(arr)) { // se ele não for um array
    throw new TypeError('The first parameter must be an array')
  }

  if(typeof func !== 'function') { // se ele for diferente de function
    throw new TypeError('The second parameter must be a function')
  }

  let newArr = []

  for (let i = 0; i < arr.length; i++)
    newArr.push(func(arr[i], i, arr))

  return newArr
}

export default map
