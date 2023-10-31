//Assignment 1

// //chp1

// //1 

// alert("Hello World");

// //2 
 
// alert("Error! Please enter a valid password.")

// //3 

// alert("Welcome to JS land...\nHappy Coding!")

// //4

// alert("Welcome to JS land")
// alert("Happy Coding!")

// //5 

// console.log(alert("Hello... I can run JS through my web browser's console."))

// //chp2

// //1

// var username;

// //2

// var myName = "Abdul Moiz"

// //3

// var message = "Hello World"

// alert(message)

// //4

// var name = "Jhone Doe";

// var age = "15 years old"

// var course = "Certified Mobile Application Development"

// alert(name);

// alert(age);

// alert(course);

// //5 

// var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP"

// alert(pizza);

// //6

// var myemail = "amkhatri89@gmail.com"

// alert("My email address is " + myemail);

// //7 

// var book = "A smarter way to learn Javascript"

// alert("I'm trying to learn from a book " + book);

// //8

// document.write("Yah! I can write HTML content through Javascript.")

// //9

// var symbol = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”"

// alert(symbol);

// //chp3

// //1 

// var age = 15;

// alert("I am " + age + " years old");

// //2

// var count = "N";

// alert("you have visited this website " + count + " times.");

// //3

// var birthYear = 2000;

// document.write("My birth year is " + birthYear + "</br>")

// document.write("Data type of my declared variable is number.")

// //4

// var visitorName = "John Doe";

// var product = "T-Shirt";

// var quantity = 5;

// document.write("</br>" + visitorName + " ordered " + quantity + " " + product + "(s) on XYZ Clothing Store.")

//chp4

// //1

// var var1 = "Hello World!"

// var var2 = "This is"

// var var3 = "Abdul Moiz"

// alert(var1 + var2 + var3);

// //2

// ////Legal////

// //1 firstName, 2 _$, 3 name1, 4 $name, 5 myNameIsKhan

// ////Illegal////

// //1 Lastname, 2 1name, 3 last name, 4 var, 5 name,last

// //3

// document.write("<h2>Rules for JS Variables</h2>");
// document.write("</br>Variable names can only contain numbers, $ and _. For Example $my_1stvariable.");
// document.write("</br>Variables must begin with a letter, $ or _.  For Example $name, _name or name.");
// document.write("</br>Variabe names are case sensitive.");
// document.write("</br>Variable names should not be JS keywords.");

//chp5

//1

var num1 = 3;

var num2 = 5;

var sum = num1 + num2;

document.write("The sum of " + num1 + " and " + num2 + " is " + sum)

//2

//substracion//

var num1 = 3;

var num2 = 5;

var sub = num1 - num2;

document.write("</br>The substraction of " + num1 + " and " + num2 + " is " + sub)

//multiplication//

var num1 = 3;

var num2 = 5;

var mutiply = num1 * num2;

document.write("</br>The multiplication of " + num1 + " and " + num2 + " is " + mutiply)

//division//

var num1 = 3;

var num2 = 5;

var divide = num1 / num2;

document.write("</br>The division of " + num1 + " and " + num2 + " is " + divide)

//modulus//

var num1 = 3;

var num2 = 5;

var modulus = num1 % num2;

document.write("</br>The division of " + num1 + " and " + num2 + " is " + modulus)

//3

var str = "Value after variable declaration is: ??"

document.write("</br>" + str);

var initialValue = 5;

document.write("</br>" + "Initial Value: " + initialValue)

var increment = initialValue + 1;

document.write("</br>Value after increment is: " + increment)

var valueInc = increment + 7;

document.write("</br>Value after addition is: " + valueInc)

var valueDec = valueInc - 1;

document.write("</br>Value after decrement is: " + valueDec)

var valueReminder = valueDec % 3;

document.write("</br>The remainder is: " + valueReminder)

//4

var ticket = 600;

var quantityTkt = 5;

var amount = ticket * quantityTkt;

document.write("</br>Total cost to buy " + quantityTkt + " ticket to a movie is " + amount + "PKR.")

//5 

var table = 4;

document.write("</br>Table of 4")
document.write("</br>" + table + "x1=" + table * 1)
document.write("</br>" + table + "x2=" + table * 2)
document.write("</br>" + table + "x3=" + table * 3)
document.write("</br>" + table + "x4=" + table * 4)
document.write("</br>" + table + "x5=" + table * 5)
document.write("</br>" + table + "x6=" + table * 6)
document.write("</br>" + table + "x7=" + table * 7)
document.write("</br>" + table + "x8=" + table * 8)
document.write("</br>" + table + "x9=" + table * 9)
document.write("</br>" + table + "x10=" + table * 10)

//6

var celcius = 25;

var fahrenheit = 70;

var fToC = (fahrenheit - 32) * 5 / 9;

var cToF = (celcius * 9 / 5) + 32;

document.write("</br>" + celcius + "oC is " + cToF + "oF");

document.write("</br>" + fahrenheit + "oF is " + fToC + "oC")

//7

var item1 = 650;

var item2 = 100;

var quantity1 = 3;

var quantity2 = 7;

var shippingCharges = 100
 
document.write("</br>Price of item 1 is " + item1)

document.write("</br>Quantity of item 1 is " + quantity1)

document.write("</br>Price of item 2 is " + item2)

document.write("</br>Quantity of item 2 is " + quantity2)

document.write("</br>Shipping Charges " + shippingCharges)

document.write("</br>Total cost of your order is " + ((item1 * quantity1) + (item2 * quantity2) + shippingCharges));

//8 

var totalMarks = 980;

var marksObtained = 804;

var percentage = marksObtained / totalMarks * 100;

document.write("</br>Total Marks: " + totalMarks + "</br>Marks Obtained: " + marksObtained + "</br>Percentage: " + percentage + " %")

//9

var $dollar = 10;

var sr = 25;

var pkr = (($dollar * 104.80) + (sr * 28))

document.write("</br><h2>Currency in PKR</h2>")
document.write("Total currency in PKR is: " + pkr);

//10

var num = 5;

document.write("</br>" + num + 5 * 10 / 2);

//11
  
var yearC = 2023;

var yearB = 2000;

document.write("</br><h1>Age Calculator</h1>");

document.write("</br>Current Year: " + yearC);

document.write("</br>Birth Year: " + yearB);

document.write("</br>Your Age: " + (yearC - yearB));

//12

var radius = 20;

var circumference = 2 * Math.PI * radius;

var area = Math.PI * Math.pow(radius, 2);

document.write("</br><h1>The Geometrizer</h1>");

document.write("</br>Radius of a circle: " + radius);

document.write("</br>The circumference is: " + circumference);

document.write("</br>The area is: " + area);

//13

var fvrtSnk = "Pizza";

var age = 23;

var ageMax = 100; 

var amnt = 2;

document.write("</br><h2>The Lifetime Supply Calculator</h2>");

document.write("</br>Favourite Snack: " + fvrtSnk);

document.write("</br>Current Age: " + age);

document.write("</br>Estimated Maximum Age: " + ageMax);

document.write("</br>Amount of snacks per day: " + amnt);

document.write("</br>You will need " + (ageMax - age) * 2 + " " + fvrtSnk + " to last until the ripe old age of " + ageMax)

