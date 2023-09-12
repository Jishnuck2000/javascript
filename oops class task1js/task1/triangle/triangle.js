class area1{

    constructor(length,width)
    {
        this.length= length
        this.width= width
    }
    sho()
    {
        let a = (this.length * this.width)
        document.write(a)
    }

}
obj=new area1(2,5)
obj.sho()
