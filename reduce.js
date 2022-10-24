const arr = [2, 4, 6, 8, 10]
const half = v => v / 2;


arr.map(half) // [1,2,3,4,5]

arr.reduce(
  (list, v) => (list.push(half(v)), list), []
); // [1,2,3,4,5]
console.log(arr.reduce(
  (list, v) => (list.push(half(v)), list), []
))

const isEven = v => v % 2 === 0;
[1, 2, 3, 4, 5].filter(isEven);
[1, 2, 3, 4, 5].reduce((list, v) => (isEven(v) ? list.push(v) : undefined, list), [])

function Just(val) {
  return { map, chain }
  function map(fn) { return Just(fn(val)) }
  function chain(fn) { return fn(val) }
  function ap(anotherMonad) { return anotherMonad.map(val) }
}

const A = Just(2)
const B = Just(3)

