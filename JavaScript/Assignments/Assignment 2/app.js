//Assignment 2 

//chp6-9

//1

var  a = 10;

document.write("Result");
document.write("</br>The value of a is: " + a + "</hr>");
document.write("</br>.....................................")
document.write("</br>The value of ++a is: " + ++a);
document.write("</br>Now the value of a is: " + a);
document.write("</br>")
document.write("</br>The value of a++ is: " + a++);
document.write("</br>Now the value of a is: " + a);
document.write("</br>")
document.write("</br>The value of a-- is: " + a--);
document.write("</br>Now the value of a is: " + a);
document.write("</br>")
document.write("</br>The value of --a is: " + --a);
document.write("</br>Now the value of a is: " + a);
document.write("</br>")

//2

var a = 2, b = 1;
var result =  --a - --b + ++b + b--;
document.write("</br>--a; pre-decrement;");
document.write("</br>--a - --b; pre decrement subtract pre decrement");
document.write("</br>--a - --b + ++b; pre decrement subtract pre decrement add pre increment");
document.write("</br>--a - --b + ++b + b--; pre decrement subtract pre decrement add pre increment add increment");
document.write("</br>a is: " + a);
document.write("</br>b is: " + b);
document.write("</br>result is: " + result);

//3 

var name = prompt("Enter Your Name");
alert("Hello," + name);

//4

var table = prompt("Enter your desired table number, 5")
