class calculator
{
    constructor(a,b)
    {
        this.a= a
        this.b= b

    }
    add()
    {
        let sum= this.a+this.b
        document.write(sum)
        document.write("<br>")
    }
    sub()
    {
        let sum= this.a-this.b
        document.write(sum)
        document.write("<br>")
    }
    mul()
    {
        let sum= this.a*this.b
        document.write(sum)
        document.write("<br>")
    }
     div()
    {
        let sum= this.a/this.b
        document.write(sum)
    }

}
let a=parseInt(prompt("enter a"))
let b=parseInt(prompt("enter b"))
obj=new calculator(a,b)
obj.add()
obj.sub()
obj.mul()
obj.div()