function zipList(arr1, arr2) {
  const output = [];
  for (let i = 0; i < arr1.length; i++) {
    output.push(arr1[i]);
    output.push(arr2[i]);
  }
  return output;
}

console.log(zipList([1, 2, 3], ['a', 'b', 'c']));

function zipListTheSimpleWay(arr1, arr2) {
  const zipped = _.zip(arr1, arr2);
  return _.flatten(zipped, 1);
}

console.log(zipListTheSimpleWay([1, 2, 3], ['a', 'b', 'c']));
