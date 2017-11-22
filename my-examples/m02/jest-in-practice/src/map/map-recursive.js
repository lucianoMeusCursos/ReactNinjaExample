'use strict'

const map = (arr = [], func = (item) => item) => {
  if (arr.length === 0)
    return []


    const [head, ...tail] = arr

    console.log('isso é o head', head)
    console.log('isso é o tail', tail)
    console.log('isso é func', func)

  return [func(head)].concat(map(tail, func))

}

export default map
