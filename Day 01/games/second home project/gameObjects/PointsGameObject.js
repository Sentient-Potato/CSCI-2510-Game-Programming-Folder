class PointsGameObject extends GameObject{
    constructor(){
        super("PointsGameObject", [], "UI")
        this.addComponent(new TextLabel(), {fillStyle: "white", text: "0 points"})
        this.addComponent(new PointsController())
    }
}