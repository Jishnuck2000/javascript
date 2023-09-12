function month()

{
    for(let i=1;i<=12;i++)
    {
        if(i==1)
        {
            document.getElementById("result").innerHTML+="jan" +"<br>"
        }
      else if(i==2)
        {
            document.getElementById("result").innerHTML+="feb"+"<br>"
        }
        else if(i==3)
        {
            document.getElementById("result").innerHTML+="mar"+"<br>"
        }
        else if(i==4)
        {
            document.getElementById("result").innerHTML+="apr"+"<br>"
        }
        else if(i==5)
        {
            document.getElementById("result").innerHTML+="may"+"<br>"
            
            
        
        
            document.getElementById("result").innerHTML+="Natinal cookie day 4th december"
            break;
            
        }
        else if(i==6)
        {
            document.write("june")
        }
        else if(i==7)
        {
            document.write("july")
        }
        else if(i==8)
        {
            document.write("august")
        }
        else if(i==9)
        {
            document.write("september")
        }
        else if(i==10)
        {
            document.write("october")
        }
        else if(i==11)
        {
            document.write("november")
        }
        else if(i==12)
        {
            document.write("december")
        }
        else{
            document.write("invalid")
        }
    }
}

