function submit(){
    var userName = document.getElementById("userName");
    var password = document.getElementById("password");
    if (userName.value.trim() && password.value.trim()) {
        console.log(userName.value);
        console.log(password.value);
        userName.value = "";
        password.value = "";
    } else {
        alert("Please enter value");
    }
}