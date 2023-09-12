class type
{
    constructor(name,age)
    {
        this.name = name
        this.age = age
    }
    show()
    {
        document.write(typeof this.name)
        document.write("<br>")
        document.write(typeof this.age)
    }
}
obj=new type("jishnu",22)
obj.show()