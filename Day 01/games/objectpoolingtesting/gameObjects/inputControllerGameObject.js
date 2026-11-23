class inputControllerGameObject extends GameObject{
    constructor(){
        super("inputControllerGameObject", [], "UI")
        this.addComponent(new viewPoolController())
        this.addComponent(new squareObjectController())

        this.addComponent(new poolTrackerController())
    }
}
