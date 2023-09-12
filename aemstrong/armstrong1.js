let a = parseInt(prompt("enter 3 digit"))
let rem = 0
let sum = 0
let temp =a
while(temp>0)
{
let rem = temp%10
sum = sum + rem*rem*rem
temp = parseInt(temp/10)
}
if(sum == a)
{
    document.write("armstrong")
}
else
{
    document.write("not armstrong")
}