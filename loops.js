let count = 0;
for (let a = 1; a <= 20; a++) {
  //print even numbers from 1 to 20 and count them
  if (a % 2 == 0) {
    console.log(a);
    count++;
  }
}
console.log("There are " + count + " even numbers");
