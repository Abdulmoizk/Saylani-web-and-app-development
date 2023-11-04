////Assignment 6////

//chp35-38//

// //1 

// function date() {
//   var crnt = new Date();
//   document.write(crnt)
// }
// date();

// //2

// function name () {
//     var firstName = prompt("enter your first name");
//     var lastName = prompt("enter your last name");
//     var fullName = firstName + " " + lastName;
//     alert("Hello, " + fullName);
// }
// name();

// //3

// function sum(){
//     var num1 = +prompt("enter digit");
//     var num2 = +prompt("enter one more digit to add in first digit");
//     var sum = num1 + num2;
//     alert(sum)
// }
// sum();

// //4

// function calc(){
//     var num1 = +prompt("enter your desired num");
//     var operator = prompt("enter your desired operator");
//     var num2 = +prompt("enter your desired num to calculate");
//     if (operator === "+") {
//         alert(num1 + num2)
//     }
//     else if (operator === "-") {
//         alert(num1 - num2)
//     }
//     else if (operator === "/") {
//         alert(num1 / num2)
//     }
//     else if (operator === "*") {
//         alert(num1 * num2)
//     } 
//     else if (operator === "%") {
//         alert(num1 % num2)
//     }
//     else if (operator !== "+", "-", "/", "*", "%") {
//         alert("Please enter the right operator")
//     }
// }
// calc();

// //5

// function sqr(){
//     var num = +prompt("enter any number for it's square");
//     alert(num * num);
// }
// sqr();

// //6

// function abc() {
//     var a = 1;
//     for(var i = fact; i > 0; i--) {
//         a = i * a;
//     }
//     alert(a);
// }
// var fact = +prompt("enter num for factorial");
// console.log(abc());

// //7

// function user() {
//     var num1 = +prompt("enter a num to start counting from");
//     var num2 = +prompt("enter a num to end counting till");
//     for (var i = num1; i <= num2; i++) {
//         document.write(i, "<br>")
//     }
// }
// user();

// //8

// function calculateHypotenuse() {
//   function calculateSquare(num) {
//     return (num * num);
//   }
//   var baseSq = calculateSquare(base);
//   var perpendicularSq = calculateSquare(perpendicular);
// //   var base = +prompt("enter the base value");
// //   var perpendicular = +prompt("enter the perpendicular value");
//   var hypotenuseSq = baseSq + perpendicularSq;
//   var hypotenuse = Math.sqrt(hypotenuseSq);
//   return(hypotenuse);
//   }
// var base = +prompt("enter the base value");
//   var perpendicular = +prompt("enter the perpendicular value");
// console.log(calculateHypotenuse())

//9

// //10

// function palindrome() {
//     var word = prompt("enter a palindrome word", "civic");
//     var check = "";
//     for (var i = word.length - 1; i >= 0; i--) {
//         check += word[i];
//     }
//     if (check === word) {
//         alert("palindrome");
//     } else {
//         alert("not")
//     }
// }
// palindrome();

//11
 function upperCase() {
    var str = "the quick brown fox";
    var arr = str.split(" ");
    for (var i = 0; i < arr.length; i++) {
       var arr1 =  arr[i].charAt(0).toUpperCase();
    }
    document.write(arr1)
 }
 upperCase();