function chunck(array, length) {
  let result = [];
  let length = array.length / length;
  length = Number.isInteger(length) ? length : Math.floor(++length);

  const newArray = array.slice();
  const firstIndex = 0;
  const lastIndex = length;

  while (newArray.length) {
    result.push(newArray.slice(firstIndex, lastIndex));
    newArray = newArray.toSpliced(firstIndex, lastIndex);
  }

  return result;
}
