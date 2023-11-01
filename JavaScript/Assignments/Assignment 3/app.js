////Assignment 3////

//chap 14 to 16

// //1

// var students;

// //2

// students = [];

// //3

// var str = ["Abdul", "Moiz"]

// //4

// var num = [129, 655];

// //5

// var boolean = [true, false];

// //6

// var mixedArr = ["Abdul Moiz", 129655, true];

// //7

// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
// document.write("Qualifications");
// document.write("</br>")
// document.write("</br>1)" + qualifications[0]);
// document.write("</br>2)" + qualifications[1]);
// document.write("</br>3)" + qualifications[2]);
// document.write("</br>4)" + qualifications[3]);
// document.write("</br>5)" + qualifications[4]);
// document.write("</br>6)" + qualifications[5]);
// document.write("</br>7)" + qualifications[6]);
// document.write("</br>8)" + qualifications[7]);

//8

// var students = ["Michael", "John", "Tony"];
// var score = [320, 230, 480];
// var totalMarks = 500;
// document.write("</br>Score of " + students[0] + " is " + score[0] + ". Percentage: " + (score[0] / totalMarks) * 100 + "%");
// document.write("</br>Score of " + students[1] + " is " + score[1] + ". Percentage: " + (score[1] / totalMarks) * 100 + "%");
// document.write("</br>Score of " + students[2] + " is " + score[2] + ". Percentage: " + (score[2] / totalMarks) * 100 + "%");

// //9

// var color = ["red", "blue", "green", "yellow", "violet"];
// color.unshift(prompt("enter the color you want to add in the beginning", "white"));
// alert(color);
// color.push(prompt("enter the color you want to add in the end", "black"));
// alert(color);
// color.unshift(prompt("Enter one more color in th beginning", "purple"), prompt("one more please", "orange"));
// alert(color);
// color.shift();
// alert(color);
// color.pop();
// alert(color);
// color.splice(
//     +prompt("Enter your desired index where you want to add a number", 2),
//     0, 
//     prompt("enter you desired color you want to add", "aqua"), 
//     prompt("one more color please", "navy")
// )
// alert(color);
// color.splice(
//     +prompt("enter the index from where you want to remove color", 2),
//     +prompt("enter how many color you want to remove color from the mentioned index", 2)
// )
// alert(color);

// //10

// var score = [320, 230, 480, 120];
// document.write("</br>Score of Students: " + score);
// document.write("</br>Ordered score of Students: " + score.sort());

// //11

// var cities = ["karachi", "lahore", "islamabad", "quetta", "peshawar"];
// var selectedCities = cities.slice(2);
// document.write("Cities list: </br>" + cities);
// document.write("</br>Selected cities list: </br>" + selectedCities)

// //12

// var arr = ["This", "is", "my", "cat"];
// document.write("Array: </br>" + arr);
// document.write("</br>String: </br>" + arr.join(" "));

// //13

// var arr = ["keyboard", "mouse", "printer", "monitor"];
// document.write("Devices: </br>" + arr);
// document.write("</br>Out: </br>" + arr.shift());
// document.write("</br>Out: </br>" + arr.shift());
// document.write("</br>Out: </br>" + arr.shift());
// document.write("</br>Out: </br>" + arr.shift());

// //14

// var arr = ["keyboard", "mouse", "printer", "monitor"];
// document.write("Devices: </br>" + arr);
// document.write("</br>Out: </br>" + arr.pop());
// document.write("</br>Out: </br>" + arr.pop());
// document.write("</br>Out: </br>" + arr.pop());
// document.write("</br>Out: </br>" + arr.pop());

// //15

// var brands = ["Apple", "Samsung", "Nokia", "Sony", "Haier"];
// for (var i = 0; i < brands.length; i++) { 
//      var arr = brands[i]
// }
// document.write("<select><option>" + arr + "</select></option>")