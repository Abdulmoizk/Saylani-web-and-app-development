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

/////chap 21-25////

// //1 

// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName + " " + lastName;
// alert("Hello, " + fullName);

// //2

// var phone = prompt("Enter your favourite phone brand", "Samsung Galaxy S6 Edge Plus");
// var length = phone.length + 1
// document.write("My favourite phone is: " + phone);
// document.write("</br>Length of string is " + length);

// //3

// var str = "Pakistani";
// document.write("String: " + str)
// document.write("<br/>Index of 'n' is: " + str.indexOf("n"));

//4

// var str = "Hello World";
// document.write("String: " + str)
// document.write("<br/>Index of 'l' is: " + str.lastIndexOf("l"));

// //5

// var str = "Pakistani";
// document.write("String: " + str)
// document.write("<br/>Character at index 3: " + str.charAt(3));

// //6

// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// alert(firstName.concat(" ", lastName));

// //7 

// var city = "Hyderabad";
// var city1 = city.replace("Hyder", "Islam");
// document.write("City: " + city)
// document.write("</br>After Replacement: " + city1);

// //8

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var msg = message.replace(/and/g, "&")
// document.write(msg);

// //9

// var str = "472";
// var num = Number(str);
// document.write("Value: " + str);
// document.write("</br>Type: string");
// document.write("</br>Value: " + num);
// document.write("</br>Type: number");

// //10

// var userInput = prompt("Enter any dryfruit", "peanuts");
// var uprcse = userInput.toUpperCase();
// document.write("User input; " + userInput);
// document.write("</br>Upper case: " + uprcse);

// //11

// var prgrm = prompt("Enter you course program", "javascript");
// var ttlecase = prgrm.charAt(0).toUpperCase();
// var remain = prgrm.slice(1);
// document.write("User input: " + prgrm);
// document.write("</br>Title case: " + ttlecase + remain);

// //12

// var num = 35.36;
// var str = num.toString();
// document.write("Number: " + num);
// document.write("</br>Result: " + str.replace(".", ""));

// //13

// var userName = prompt("Enter your username");
// var spclChar = ["@", ".", ",", "!"];
// for (var i = 0; i < userName.length; i++) {
//     if (userName.includes(spclChar[i])) {
//         var name = prompt("Please enter username without special characters")
//     }
//     else {
//         alert("Thanks")
//         break;
//     }
// }

// //14

// var a = ["cake", "apple pie", "cookie", "chips", "patties"];
// var order = prompt("Welcome to ABC Bakery. What do you want to order Sir/Madam", "cookie");
// var flag = true;
// for (var i = 0; i <= a.length; i++){
//     if(order === a[i]) {
//         alert(order + " is available at index " + (i + 1) + " in our bakery");
//      flag = false;
//     } 
// }
// if (flag){
//     alert(order + " is not available in our bakery");
// }

//15

// var password = prompt("Enter your password");
// var hasAlphabet = false;
// var hasNumber = false;
// for (var i = 0; i < password.length; i++) {
//     var charcode = password.charCodeAt(i);
//     if ((charcode >=65 && charcode <= 90) || (charcode >=97 && charcode <=122)) {
//         hasAlphabet= true;
//     } else if (charcode >= 48 && charcode <= 57) {
//         hasNumber = true;
//     } 
// }
// if (hasAlphabet && hasNumber && password.length >=6 && !(password[0].charCodeAt(0) >= 48 && password[0].charCodeAt(0) <= 57)) {
//     document.write("Entered Password: " + password);
//     document.write("</br>Password is valid.")
// } else {
//     document.write("Entered password: " + password);
//     document.write("</br>Invalid password! Please enter a valid password.")
// }

//16

// var university = "University of Karachi";
// university = university.split("");
// document.write(university.join("</br>"));

// //17

// var userInput = prompt("enter something", "Pakistan");
// document.write("User input: " + userInput);
// document.write("</br>Last character of input: " + userInput.charAt(userInput.length - 1))

// //18

// var str = "The quick brown fox jumps over the lazy dog";
// str = str.toLowerCase();
// str = str.split(" ")
// var count = 0;
// for(var i = 0; i < str.length; i++){
//     if (str[i] === "the") {
//         count++;
//     }
// }
// document.write("Text: The quick brown fox jumps oer the lazy dog");
// document.write("</br>There are " + count + " occurence(s) of word 'the'.")

