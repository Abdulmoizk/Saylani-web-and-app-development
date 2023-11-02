/////Assignment 5/////

//chap26-30

// //1

// var num = +prompt("enter any positive integar with some decimal value", 3.45214);
// document.write("number: " + num);
// document.write("</br>round off value: " + Math.round(num));
// document.write("</br>floor value: " + Math.floor(num));
// document.write("</br>ceil value: " + Math.ceil(num));

//2

// var num = +prompt("enter any negative integar with some decimal value", (-2.673));
// document.write("number: " + num);
// document.write("</br>round off value: " + Math.round(num));
// document.write("</br>floor value: " + Math.floor(num));
// document.write("</br>ceil value: " + Math.ceil(num));

// //3

// var num = -4;
// document.write("The absolute value of " + num + " is " + Math.abs(num));

// //4

// var dice = Math.floor(Math.random() * 6) + 1;
// document.write("random dice value: " + dice); 

// //5

// var coin = Math.floor(Math.random() * 2);
// if (coin === 0) {
//     document.write("1</br>random coin value: Heads");
// } else if (coin === 1) {
//     document.write("2</br>random coin value: Tails");
// }

// //6 

// document.write("random number between 1 and 100: " + Math.floor(Math.random() * 101));

// //7

// var weight = +prompt("Enter your weight in kilograms", 58.3);
// document.write("The weight of user is " + parseFloat(weight));

// //8

// var num = Math.floor(Math.random() * 11);
// var userInput = +prompt("Enter a number between 1 to 10", 6);
// if (userInput !== num) {
//     alert("Congratulations")
// } else {
//     alert("TryAgain")
// }
 
//chp31-34

// //1

// var date = new Date ();
// document.write(date);

// //2

// var date = new Date ();
// var month = date.getMonth();
// var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// document.write("Current month: " + monthNames[month]);

// //3

// var date = new Date ();
// var day = date.getDay();
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// document.write("Today is " + dayNames[day]);
 
// //4

// var date = new Date ();
// var day = date.getDay();
// if ((day === 0) || (day === 6)) {
//     document.write("It's Fun day")
// }

// //5

// var date = new Date ();
// var day = date.getDay();
// if (day <= 14) {
//     document.write("First Fifteen days of the month")
// } else {
//     document.write("Last days of the month")
// }

// //6 

// var time = new Date();
// var mSeconds = time.getTime();
// var mintSinceMidnight = mSeconds / (1000 * 60);
// document.write("Current Date: " + time);
// document.write("</br>Elapsed milleseconds since January 1, 1970: " + mSeconds);
// document.write("</br>Elapsed minutes since January 1, 1970: " + mintSinceMidnight);

// //7

// var time = new Date ();
// var hour = time.getHours();
// if (hour <= 12 ) {
//     document.write("It's AM")
// } else {
//     document.write("It's PM")
// }

// //8

// var time = new Date("December 31, 2020");
// var laterDate = time;
// document.write(laterDate);

// //9

// var ramzan = new Date("June 18, 2015");
// var newDate = new Date();
// var dayPassed = newDate.getTime() - ramzan.getTime();
// var roundDay = Math.round(dayPassed / (1000 * 60 * 60 * 24 ));
// document.write(roundDay + " days have passed since 1st Ramadan, 2015");

// //10

// var time = new Date();
// var currentDate = new Date ("January 1, 2023");
// var secondsPassed = time.getTime() - currentDate.getTime();
// var roundSeconds = Math.round(secondsPassed / (1000 * 60));
// document.write("On reference date " + time + ",</br>" + roundSeconds + " seconds had passed since beginning of 2023");

// //11

// var time = new Date();
// var hour = time.getHours();
// time.setHours(hour - 1);
// document.write("Current date: " + new Date());
// document.write("</br>1 hour ago, it was " + time);

// //12

// var time = new Date();
// var date = time.getDate();
// time.setDate(date - 36525);
// document.write("Current date: " + new Date());
// document.write("</br>100 years back, it was " + time);

// //13

// var time = new Date();
// var age = +prompt("Enter your age");
// var years = time.getFullYear();
// var dob = years - age;
// document.write("Your age is " + age);
// document.write("</br>Your birth year is " + dob);

// //14

// var customerName = "ABC Customer";
// var month = "Februaruy";
// var noUnits = 410;
// var chargesUnit = 16;
// var amountPayable = noUnits * chargesUnit;
// var surchrge = 350;
// var amountPayableDue = amountPayable + surchrge;
// document.write("<h1>K-Electric Bill</h1>");
// document.write("</br>Customer Name: " + customerName);
// document.write("</br>Months: " + month);
// document.write("</br>Number of units: " + noUnits);
// document.write("</br>Charges per unit: " + chargesUnit);
// document.write("</br>");
// document.write("</br>Net Amount Payable (within Due Date): " + amountPayable);
// document.write("</br>Late payment surcharge: " + surchrge);
// document.write("</br>Gross Amount Payable (after Due Date): " + amountPayableDue);