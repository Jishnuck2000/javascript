var email = document.getElementById("email");
var error = document.getElementById("error");

// to check ehether the email is in email format
// for that we need to create email format using regular expression
// regular expression is set of strings or special characters
// regular expression is start and end with forward slash(/)
// ^ denotes the start of a string
// $ denotes the end of a string
// . and - are special characters,so it should follow backward slash
// + denotes whatever inside the the brackets should occur one time and it can occur more than one time
//{2,4} denotes maximum number of characters as extension
// ? denotes its occur zero or one time
// test()check the value that are given with the regular expression.
// \w denotes A-Za-z0-9
// example@gmail.com
function validate(){
    var regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})([a-z]{2,3})?$/;
    // var regexp = /^([\w\.-]+)@(\w\-]+).([a-z]{2,3})?$/
    if(regexp.test(email.value)){
        error.innerHTML = "valid";
        error.style.color = "green";
        return true;
    }
    else{
        error.innerHTML = "Please enter valid email";
        error.style.color = "red";
        return false;
    }
    }
