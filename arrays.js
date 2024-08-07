const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //program to list elements of an array as per the index
let count = 0;
for (let a = 0; a < numbers.length; a++) {
  console.log("Element at index " + count + " is " + numbers[a]);
  count++;
}
console.log("\n");
numbers[0] = 100;
console.log("Element at index 0 after changing is " + numbers[0]);
