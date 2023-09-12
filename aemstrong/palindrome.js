let a = prompt("Enter a number")
var num,c,b,temp = 0;
 
b = num;
while(num>0)
{
    a = num%10
    num = parseInt(num/10);
    temptemp = temp*10 + a;

}
if(temp == b)
{
    document.write("palindrom")
}
else{
    document.write("not palindrome")
}