class Vector2{
    x
    y

    //Think of it as __init__ from Python
    constructor(x, y){
    //Think of it as self.x from Python
        this.x = x
        this.y = y
    }

    clone(){
        return new Vector2(this.x, this.y)
    }

}