// let arr = [10, 25, 5, 98, 45];
// let first = -Infinity;
// let second = -Infinity;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > first) {
//     second = first;
//     first = arr[i];
//   } else if (arr[i] > second && arr[i] < first) {
//     second = arr[i];
//   }
// }

// console.log("2nd largest:", second);

function findSecondLargest(arr) {
  let first = -Infinity; let second = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] < first) {
      second = arr[i];
    }
  }

  return second;
}

console.log(findSecondLargest([1, 2, 5, 8, 4])); 