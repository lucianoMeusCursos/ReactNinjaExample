
console.assert(
  counter(0, { type: 'INCREMENT' }) === 1
)

console.assert(
  counter(1, { type: 'INCREMENT' }) === 2
)

console.assert(
  counter(5, { type: 'DECREMENT' }) === 4
)

console.assert(
  counter(5, { type: 'SOMETHING' }) === 5
)

console.assert(
  counter(undefined, {}) === 0
)
