'use strict'

const reverse = (arr) => {
  if(arr.length === 0) {
    return arr.length === 0 ? [] : [
      arr.slice(-1)[0],
      ...(reverse(arr.slice(0, -1)))
    ]
  }
  return [arr[arr.length - 1]].concat(reverse(arr.slice(0, -1)))
}

export default reverse
