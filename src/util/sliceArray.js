export function sliceArray(array, size) {
  var result = [];
  for (let x = 0; x < Math.ceil(array.length / size); x++) {
    let start = x * size;
    let end = start + size;
    result.push(array.slice(start, end));
  }
  return result;
}
