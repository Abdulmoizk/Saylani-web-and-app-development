 var screen = document.getElementById("screen")

function addtodisplay(value) {
    screen.value += value;
}
function cleardisplay() {
    screen.value = "";
}
function calculate(){
    screen.value = eval(screen.value)
}