class GenericLevel extends Scene{
    constructor(){
        super("grey")
        this.instantiate(new inputControllerGameObject())
        let squareObject = this.instantiate(new squareGameObject())
        squareObject.reset()
    }
}
