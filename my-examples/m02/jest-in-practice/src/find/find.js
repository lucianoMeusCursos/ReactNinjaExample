
const find = (arr, func) => {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i], i, arr)) {
      return arr[i]
    }
  }
  return 1
}

export default find
