'use strict'

const reduce = (arr, func, initialValue) => {
  let acc = initialValue
  let arrCopy = arr

  if(initialValue === undefined) {
    acc = arr[0]
    arrCopy = arr.slice(1)
  }

  // for(var i = 0; i < arrCopy.length; i++){
  //   acc = func(acc, arrCopy[i], i, arrCopy)
  // }
  // return acc

  return (function reduceInternal (accInternal, arrInternal, counter) {
    const [head, ...tail] = arrInternal

  })(acc, arrCopy, 0)
}

export default reduce
