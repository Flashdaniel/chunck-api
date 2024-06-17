function chunck(array, n) {
  let result = [];
  let length = array.length / n;
  length = Number.isInteger(length) ? length : Math.floor(++length);

  let newArray = array.slice();
  const firstIndex = 0;
  const lastIndex = length;

  while (newArray.length) {
    result.push(newArray.slice(firstIndex, lastIndex));
    newArray = newArray.toSpliced(firstIndex, lastIndex);
  }

  return result;
}

export default chunck;
