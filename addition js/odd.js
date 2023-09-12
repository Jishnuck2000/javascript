function limit()
{
    let a=parseInt(document.getElementById("num1").value)
    let b=parseInt(document.getElementById("num2").value)
        for (i= a; i <= b; i++) {
            if (i % 2 == 1) {
                 document.getElementById("result").innerHTML+=i; 
            }
        }
    }
      