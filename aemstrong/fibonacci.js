let a = parseInt(prompt("enter a digit"))
let b = 0
let c = 1 ,sum;
document.write("fibonacci series");

for(let i = 1; i <= a; i++)
{
    document.write(b);
    sum = b + c;
    b = c;
    c = sum;
}
    
