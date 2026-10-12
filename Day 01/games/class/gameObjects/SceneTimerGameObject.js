class SceneTimerGameObject extends GameObject{
    constructor(){
        super("SceneTimerGameObject", [], "UI")
        this.addComponent(new TextLabel(), {text: "Time"})
        this.addComponent(new SceneTimerController())
    }
}
