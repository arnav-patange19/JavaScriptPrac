const hello = "my name is arnav"; //constant is a variable whose value cannot be changed in the program
var num1 = 10;
num1 = 10 + 5;
console.log(hello); //console.log() is used to print anything on the screen
console.log(num1);

//function for addition of two numbers
var num_1, num_2, sum;
function add(num_1, num_2) {
  sum = num_1 + num_2;
  console.log("Addition of numbers is " + sum);
}
add(2, 3); //calling function add

var num = Math.floor(200.934); //rounding down
console.log(num);
var experiment = Math.ceil(200.00001); //rounding up
console.log(experiment);

var rem = 20 % 5;
console.log("remainder of 20/5 is " + rem);

console.log(Math.pow(2, 3));
console.log(2 ** 3); //raising a number to a specific power

let x = 5;
x += 25;
console.log(x); //shorthand assingment operator

var word = "cat"; //working with strings
console.log(word[1]); //prints character at index 1 of the string
