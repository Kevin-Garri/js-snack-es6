const colors = [
  'rosso',
  'giallo',
  'verde',
  'blu',
  'arancione',
  'viola',
]

function filterArray(min, max, array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i >= min && i <= max) {
      newArray.push(array[i])
    }
  }

  return newArray
}
console.log(filterArray(1, 4, colors));
