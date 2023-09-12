let a=prompt("Enter 1st string:");
let b=prompt("Enter 2nd string:");

let result = a.toUpperCase() === b.toUpperCase();

if(result) {
    document.write('The strings are similar.');
} else {
    document.write('The strings are not similar.');
}