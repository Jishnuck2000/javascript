function validate(){
    var fname=document.getElementById("fname").value
    var email=document.getElementById("email").value

    var lname=document.getElementById("lname").value
    var dob=document.getElementById("dob").value
    var tel=document.getElementById("tel").value
    var hname=document.getElementById("hname").value
    var address=document.getElementById("address").value
    
    var regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})([a-z]{2,3})?$/;
    var regexp1 =/^([A-Za-z\.]+)([A-Za-z\.])$/;
    var regexp2 =/^([A-Za-z\.]+)([A-Za-z\.])$/;
    var regexp3 =/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/
    var regexp4 =/^\(?([0-9]{3})\)?[-.]?([0-9]{3})[-.]?([0-9]{4})$/;
    
    if(regexp1.test(fname)){
        document.getElementById("error1").innerHTML="valid";
        error1.style.color="green";
     }
     else{
         document.getElementById("error1").innerHTML="not valid";
         error1.style.color="red";
 
     }
    
    if(regexp2.test(lname)){
        document.getElementById("error2").innerHTML="valid";
        error2.style.color="green";
     }
     else{
         document.getElementById("error2").innerHTML="not valid";
         error2.style.color="red";
 
     }
    
     if(regexp3.test(dob)){
        document.getElementById("error3").innerHTML="valid";
        error3.style.color="green";
     }
     else{
         document.getElementById("error3").innerHTML="not valid";
         error3.style.color="red";
 
     }
     if(regexp4.test(tel)){
        document.getElementById("error4").innerHTML="valid";
        error4.style.color="green";
     }
     else{
         document.getElementById("error4").innerHTML="not valid";
         error4.style.color="red";
 
     }
     if(regexp1.test(hname)){
        document.getElementById("error5").innerHTML="valid";
        error5.style.color="green";
     }
     else{
         document.getElementById("error5").innerHTML="not valid";
         error5.style.color="red";
 
     }
     if(regexp1.test(address)){
        document.getElementById("error6").innerHTML="valid";
        error6.style.color="green";
     }
     else{
         document.getElementById("error6").innerHTML="not valid";
         error6.style.color="red";
 
     }
    if(regexp.test(email)){
       document.getElementById("error").innerHTML="valid";
       error.style.color="green";
    }
    else{
        document.getElementById("error").innerHTML="not valid";
        error.style.color="red";

    }
}
