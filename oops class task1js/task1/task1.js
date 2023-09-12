class studentf
{
    constructor(name,roll)
    {
        this.name = name
        this.roll = roll
        
        
    }
    display()
    {
        document.write(this.name,this.roll)
        document.write("<br>")
    }
    setage(age)
    {
        this.age = age 
        document.write(this.age)
        document.write("<br>")
    }
    setmarks(mark)
    {
        this.mark = mark
        document.write(this.mark)
    }

}

stu=new studentf("jishnu",10)
stu.display()
stu.setage(22)
stu.setmarks(100)