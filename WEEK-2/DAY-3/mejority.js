// let arr = [3, 3, 4, 2, 3, 3, 3];
// let countMap = {};
// let n = arr.length;

// for (let num of arr) {
//   countMap[num] = (countMap[num] || 0) + 1;  // count occurrences
//   if (countMap[num] > n / 2) {               // check majority
//     console.log("Majority element:", num);
//     break;
//   }
// }
function findMajority(arr) {
  let countMap = {};
  let n = arr.length;

  for (let num of arr) {
    countMap[num] = (countMap[num] || 0) + 1;  // count occurrences
    if (countMap[num] > n / 2) return num;     // if majority found, return
  }

  return "No majority element";                 // if none found
}

let numbers = [3, 3, 4, 2, 3, 3, 3];
console.log("Majority element:", findMajority(numbers));
