class LivesGameObject extends GameObject{
    constructor(){
        super("LivesGameObject")
        this.addComponent(new TextLabel(), {fillStyle: "white", text: "3 Lives"})
        this.addComponent(new LivesController())
    }
}