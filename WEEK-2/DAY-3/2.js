

let arr = [15, 25, 26, 45, 66, 78, 11], x = 78, y = 10;

function findValue(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === x) { console.log("Found at:", [i]); }
  }
  return null; 
}

findValue(arr, x);