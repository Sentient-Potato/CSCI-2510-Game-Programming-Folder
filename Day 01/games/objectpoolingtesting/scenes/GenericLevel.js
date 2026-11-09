class GenericLevel extends Scene{
    constructor(){
        super("grey")
        let inputController = new inputControllerGameObject()
        this.instantiate(inputController)
        //this.instantiate(new viewPoolLight(), new Vector2(20, 20))
        // let squareObject = this.instantiate(new squareGameObject())
        // squareObject.reset()
        
    }
}
