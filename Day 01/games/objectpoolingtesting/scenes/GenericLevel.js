class GenericLevel extends Scene{
    constructor(){
        super("grey")
        let inputController = new inputControllerGameObject()
        this.instantiate(inputController)

        this.instantiate(new inPoolTrackerGameObject(), new Vector2(60, 60))
        
    }
}
