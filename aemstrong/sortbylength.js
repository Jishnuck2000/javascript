let a = prompt("Enter words")
let b = a.split(" ")
var sorted = b.sort((a,b) => a.length - b.length);
document.write(sorted)