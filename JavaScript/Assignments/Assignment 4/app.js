///Assignment 4///

//chp17-20

// //1

// var arr = [];
// arr[0];
// arr[1];

// //2

// var arr = [];
// arr[0] = "0 1 2 3";
// arr[1] = "1 0 1 2";
// arr[2] = "2 1 0 1";
// for (var i = 0; i < arr.length; i++) {
//    document.write(arr[i] + "</br>") 
// }

//3

// for (var i = 1; i < 11; i++) {
//     document.write(i + "</br>")
// }

// //4

// var num = +prompt("enter a number to show its multiplication table", 2);
// var length = +prompt("Enter length multiplication table", 15);
// document.write("Mutiplication table of " + num + "</br>Length " + length);
// for (var i = 1; i <= length; i++) {
//     document.write("</br>" + num + " x " + i + " = " + (num * i));
// }

// //5

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// var index = [0];
// for (var i = 0; i < fruits.length; i++) {
//     document.write(fruits[i] + "</br>") 

// }
// for (var j = 0; j <fruits.length; j++) {
//     document.write("</br> Element at index " + index++ + " is " + fruits[j]);
// }

// //6

// document.write("<h2>Counting:</h2> </br>")
// for (var i = 1; i <= 15; i++) {
//     document.write(i + ", ");
// }
// document.write("</br><h2>Reverse Counting:</h2> </br>")
// for (var i = 10; i >= 1; i--){
//     document.write(i + ", ");
// }
// document.write("</br><h2>Even:</h2> </br>")
// for (var i = 0; i <= 20; i++) {
//     if (i % 2 === 0) {
//         document.write(i, ", ")
//     }
// }
// document.write("</br><h2>Odd:</h2> </br>")
// for (var i = 0; i <= 20; i++) {
//     if (i % 2 !== 0) {
//         document.write(i, ", ")
//     }
// }
// document.write("</br><h2>Series:</h2> </br>")
// for (var i = 2; i <= 20; i++) {
//     if (i % 2 === 0) {
//         document.write(i, "k, ")
//     }
// }

// //7

// var order = prompt("Welcome to ABC Bakery, What do you want to order Sir/Madam?")
// var a = ["cake", "apple pie", "cookie", "chips", "patties"];
// for (var i = 0; i <= a.length; i++) {
//     if (order === a[i]) {
//         alert("cookie is available at index " + (i + 1) + " in our bakery")
//     }   
// }
// if (order !== a[i]) {
//     alert("We are sorry. " + order + " is not available in our bakery");
// }

// //8

// var a = [24, 53, 78, 91, 12];
// var sortt = a.sort()
// document.write("Array items: " + a);
// document.write("</br>The largest number is " + a[sortt.length-1])

// //9

// var a = [24, 53, 78, 91, 12];
// var sortt = a.sort()
// document.write("Array items: " + a);
// document.write("</br>The largest number is " + sortt[0])

// //10

// for (var i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//     document.write(i + ", ")
// }
// }

