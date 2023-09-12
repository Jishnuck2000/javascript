class student 
{
    constructor(name, age)
     {
        this.name = name
        this.age = age
    }
    display()
     {
    document.write(this.name, this.age)
}
}
obj = new student("abc", 20)
obj.display()