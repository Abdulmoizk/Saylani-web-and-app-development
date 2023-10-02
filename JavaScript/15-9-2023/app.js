var str = "5+5-";

var newInput = "+";

var last = str[str.length - 1];

var arr = ["+","-","*","/"]

if (arr.indexOf(last) !== -1 && arr.indexOf(newInput) !== -1) {
    str = str.slice(0, -1) + newInput;
} else {
    str += newInput;
}

console.log(str)

