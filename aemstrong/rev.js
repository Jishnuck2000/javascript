let a = parseInt(prompt("enter your number"))
let b = 0;
let c = a;
let sum = 0;

while (c > 0) {
    b = c % 10;
    sum = sum * 10 + b
    c = parseInt(c / 10)
}
document.write(+ sum + "<br>")

