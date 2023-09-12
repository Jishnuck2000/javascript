let a = parseInt(prompt("enter the value of a"))
let b = parseInt(prompt("enter the value of b"))
let c = parseInt(prompt("enter the value of c"))
let d = b * b - [4 * (a * c)]
let dsqrt = Math.sqrt(Math.abs(d));
if (a == 0) {
    document.write("Invalid")
}
if (d > 0) {
    let pos = [(-b + dsqrt) / (2 * a)];
    let neg = [(-b - dsqrt) / (2 * a)];
    document.write("roots are real and different ")
    document.write(pos + " and " + neg)
} else if (d == 0) {
    document.write("roots are real and equal ")

    let pos1 = (-b) / 2 * a;
    let neg2 = (-b) / 2 * a;
    document.write(pos1 + " and " + neg2)

} else {
    document.write(" roots are complex")
}