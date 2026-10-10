class LivesGameObject extends GameObject{
    constructor(){
        super("LivesGameObject", [], "UI")
        this.addComponent(new TextLabel(), {fillStyle: "black", text: "3 Lives"})
        this.addComponent(new LivesController())
    }
}