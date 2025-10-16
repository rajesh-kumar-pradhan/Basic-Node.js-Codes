let arr = [10, 25, 5, 98, 45];
let smallest = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] < smallest) {
    smallest = arr[i];
  }
}

console.log("Smallest number:", smallest);

// Output: Smallest number: 5