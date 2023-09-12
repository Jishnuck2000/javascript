let a= parseInt(prompt("enter a number"))
if (a == 1){
    document.write("1 is special")
}
else
{
for(let i=2; i<a; i++)
{
    if(a % i == 0)
    {
    document.write("not prime number")
    break;
    }
else 
{

    
    document.write(" prime number")
    break;
    }
    

}

}

   



