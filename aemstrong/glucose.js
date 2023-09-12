let a=prompt("Enter your glucose value")
if(a>=80 && a<=110){
    document.write("Normal glucose level")
}else if(a<80){
    document.write("low glucose level")
}else if(a>110){
    document.write("High glucose level")
}