class Vector2{
    x
    y

    //Think of it as __init__ from Python
    constructor(x, y){
    //Think of it as self.x from Python
        this.x = x
        this.y = y
    }

    plus(other){
        return new Vector2(this.x + other.x, this.y + other.y)
    }

    minus(other){
        return new Vector2(this.x - other.x, this.y - other.y)
    }

    get magnitude(){
        return Math.sqrt(this.x ** 2 + this.y ** 2)
    }

    clone(){
        return new Vector2(this.x, this.y)
    }

}