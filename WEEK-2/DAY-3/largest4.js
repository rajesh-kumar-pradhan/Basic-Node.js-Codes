let arr = [10, 25, 5, 98, 45];
let largest = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
  }
}

console.log("Largest number:", largest);
