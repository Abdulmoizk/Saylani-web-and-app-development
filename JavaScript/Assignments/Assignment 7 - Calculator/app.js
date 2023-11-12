 var screen = document.getElementById("screen")

function addtodisplay(value) {
    var scrn = screen.value;
    var sign = ["+", "-", "*", "/", "%"];
    var last = scrn[scrn.length -1];
    var newInput = value;  

    if (sign.indexOf(last) !== -1 && sign.indexOf(newInput) !== -1)
    {
       scrn = scrn.slice(0, -1) + newInput;
    } else {
        scrn += value;
    }
    screen.value = scrn;
    
}
function singleDlt() {
    screen.value = screen.value.slice(0, -1);

}

function cleardisplay() {
    screen.value = "";
}

function calculate(){
    screen.value = eval(screen.value)
}