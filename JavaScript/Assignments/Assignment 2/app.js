// // //Assignment 2 

// // //chp6-9

// // //1

// // var a = 10;

// // document.write("Result");
// // document.write("</br>The value of a is: " + a + "</hr>");
// // document.write("</br>.....................................")
// // document.write("</br>The value of ++a is: " + ++a);
// // document.write("</br>Now the value of a is: " + a);
// // document.write("</br>")
// // document.write("</br>The value of a++ is: " + a++);
// // document.write("</br>Now the value of a is: " + a);
// // document.write("</br>")
// // document.write("</br>The value of a-- is: " + a--);
// // document.write("</br>Now the value of a is: " + a);
// // document.write("</br>")
// // document.write("</br>The value of --a is: " + --a);
// // document.write("</br>Now the value of a is: " + a);
// // document.write("</br>")

// // //2

// // var a = 2, b = 1;
// // var result = --a - --b + ++b + b--;
// // document.write("</br>--a; pre-decrement;");
// // document.write("</br>--a - --b; pre decrement subtract pre decrement");
// // document.write("</br>--a - --b + ++b; pre decrement subtract pre decrement add pre increment");
// // document.write("</br>--a - --b + ++b + b--; pre decrement subtract pre decrement add pre increment add increment");
// // document.write("</br>a is: " + a);
// // document.write("</br>b is: " + b);
// // document.write("</br>result is: " + result);

// // //3 

// // var name = prompt("Enter Your Name");
// // alert("Hello," + name);

// // //4

// // //5

// // var table = prompt("Enter your desired table number", 5);
// // document.write("</br>Table of " + table);
// // document.write("</br>" + table + "x1=" + table * 1);
// // document.write("</br>" + table + "x2=" + table * 2);
// // document.write("</br>" + table + "x3=" + table * 3);
// // document.write("</br>" + table + "x4=" + table * 4);
// // document.write("</br>" + table + "x5=" + table * 5);
// // document.write("</br>" + table + "x6=" + table * 6);
// // document.write("</br>" + table + "x7=" + table * 7);
// // document.write("</br>" + table + "x8=" + table * 8);
// // document.write("</br>" + table + "x9=" + table * 9);
// // document.write("</br>" + table + "x10=" + table * 10);

// // //6

// // var sub1 = prompt("Enter you subject", "English");
// // var sub2 = prompt("Enter you subject", "Physics");
// // var sub3 = prompt("Enter you subject", "Chemistry");
// // var totalMarks = 100;
// // var marksObtained1 = prompt("Enter obtained marks", 54);
// // var marksObtained2 = prompt("Enter obtained marks", 54);
// // var marksObtained3 = prompt("Enter obtained marks", 48);
// // var total = marksObtained1 + marksObtained2 + marksObtained3;
// // document.write("</br><h2>Subject Total Marks Obtained Marks Percentage")
// // document.write("</br>" + sub1 + " " + totalMarks + " " + marksObtained1 + " " + (marksObtained1 / totalMarks) * 100 + "%");
// // document.write("</br>" + sub2 + " " + totalMarks + " " + marksObtained2 + " " + (marksObtained2 / totalMarks) * 100 + "%");
// // document.write("</br>" + sub3 + " " + totalMarks + " " + marksObtained3 + " " + (marksObtained3 / totalMarks) * 100 + "%");
// // document.write("</br>" + (totalMarks * 3) + " " + total + " " + ((total / (total * 3)) * 100) + "%");

// //chp 9-11

// //1

// var city = prompt("Enter city", "Karachi");
// if (city === "Karachi") {
//     alert("Welcome to the city of lights")
// }

// //2

// var gender = prompt("Your Gender");
// if(gender === "male") {
//     alert("Good Morning Sir")
// }
// else if(gender === "female") {
//     alert("Good Morning Madam")
// }

// //3 

// var trfcSgnl = prompt("Red, Yellow, Green")
// if (trfcSgnl === "Red") {
//     alert("Must Stop");
// } 
// else if (trfcSgnl === "Yellow") {
//     alert("Ready to move")  
// }
// else if (trfcSgnl === "Green") {
//     alert("Move now");
// }

// //4

// var remainingFuel = prompt("Your Current Fuel in litre");
// if (remainingFuel < 0.25) {
//     alert("Please refill the fuel in your car")
// }

// //5 

// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is false")
// }
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is false");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is false");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }
// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }
// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }

//6 

// var eng = prompt("Enter your marks in english");
// var mth = prompt("Enter your marks in maths");
// var sst = prompt("Enter your marks in social studies");
// var tMarks = 300;
// var tObtain = Number(eng) + Number(mth) + Number(sst);
// var percent = (tObtain / tMarks) * 100;
// document.write("<h2>Marks Sheet</h2>");
// document.write("</br>Total Marks: " + tMarks);
// document.write("</br>Marks Obtained: " + tObtain);
// document.write("</br>Percentage: " + percent + "%");
// if (percent >= 80) {
//     document.write("</br>Grade: A-one");
//     document.write("</br>Remarks: Excellent")
// }
// else if (percent >= 70) {
//     document.write("</br>Grade: A");
//     document.write("</br>Remarks: Good")
// }
// else if (percent >= 60) {
//     document.write("</br>Grade: B");
//     document.write("</br>Remarks: You need to improve")
// }
// else if (percent < 60) {
//     document.write("</br>Grade: Fail");
//     document.write("</br>Remarks: Sorry")
// }

//7

// var scrtNum = 5;
// var num = +prompt("Enter Number")
// if (num === scrtNum) {
//     alert("Bingo");
// }
// else if (++scrtNum === num) {
//     alert("Close enough to the correct answer")
// }
// else {
//     alert("Try Again")
// }

//8

// var num = +prompt("Enter a num");
// if (num % 3 === 0) {
//     alert(num + " is divisible by 3")
// }
// else {
//     alert(num + " is not divisible by 3")
// }

//9

// var num = +prompt("Enter a num to check even or odd");
// if (num % 2 === 0) {
//     alert(num + " is even num")
// }
// else if (num % 1 === 0) {
//     alert(num + " is odd num")
// }

// //10

// var tmp = +prompt("Enter temperature");
// if (tmp > 40) {
//     alert("It is too hot outside.")
// }
// else if (tmp > 30) {
//     alert("The weather today is normal.")
// }
// else if (tmp > 20) {
//     alert("Today's weather is cool.")
// }
// else if (tmp > 10) {
//     alert("OMG! Today's weather is so cool.")
// }

//11

// var digit1 = +prompt("Enter 1st digit");
// var sign = prompt("Enter operator sign");
// var digit2 = +prompt("Enter 2nd digit");

// if (sign === "+") {
//     alert(digit1 + digit2);
// }
// else if (sign === "-") {
//     alert(digit1 - digit2);
// }
// else if (sign === "*") {
//     alert(digit1 * digit2);
// }
// else if (sign === "/") {
//     alert(digit1 / digit2);
// }
// else if(sign === "%") {
//     alert(digit1 % digit2)
// }

//chp 12-13

// //1

// var char = prompt("Enter something");

// if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <=90) {
//     alert("its an uppercase")
// }
// else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <=122) {
//     alert("its an lowercase")
// }
// else  if(!isNaN(char)) {
//     alert("its a number")
// }

// //2

// var integr1 = +prompt("enter digit");
// var integr2 = +prompt("enter digit");
// if (integr1 > integr2) {
//     alert(integr1 + " is greater than " + integr2);
// } 
// else if (integr1 === integr2) {
//     alert(integr1 + " is equal to " + integr2);
// }

// //3

// var num = +prompt("enter num");
// if (num > 0) {
//     alert(num + " is positive num");
// }
// else if(num === 0) {
//     alert(num + " is zero");
// }
// else if (num < 0) {
//     alert(num + " is a  negative num")
// }

// //4

// var char = prompt("enter your name ")
// if (char.charAt(0) === "a" || char.charAt(0) === "e" || char.charAt(0) === "i" || char.charAt(0) === "o" || char.charAt(0) === "u") {
//     alert("this is vowels.")
// } 
// else {
//     alert("this is not vowels.")
// }

// //5

// var password = "chapter13";
// var userInput = prompt("enter password");
// if (userInput === password){
//     alert("Correct! The password you entered matches the original password");
// }
// else {
//     alert("Incorrect Password")
// }

// //6

// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good Day"
//     alert(greeting);
// } else {
//     greeting = "Good Evening";
//     alert(greeting)
// }

//7

// var time = +prompt("enter time value in business hours, Example: 1900 = 7PM");
// if (time >= 0000 && time < 1200) {
//     alert("Good Morning")
// }
// else if (time >= 1200 && time < 1700) {
//     alert("Good Afternoon")
// }
// else if (time >= 1700 && time < 2100) {
//     alert("Good Evening")
// }
// else if (time >= 2100 && time < 2359) {
//     alert("Good Night")
// }
// else {
//     alert("Please enter time in business hours like 1900 = 7PM")
// }