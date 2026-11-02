class GenericLevel extends Scene{
    constructor(){
        super("grey")
        this.instantiate(new squareGameObject(), new Vector2(50, 50))
    }
}
