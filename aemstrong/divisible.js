let a = parseInt(prompt("enter a number"))
let b = parseInt(prompt("Enter a number you want to divisible by"))
let c = a % b
if (c == 0) {

    document.write("The given number "+a+" is divisible by " + b)
} else {
    document.write("the given number "+a+" is not divisible by "+b)
}