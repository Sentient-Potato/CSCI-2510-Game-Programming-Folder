class PointsGameObject extends GameObject{
    constructor(){
        super("PointsGameObject", [], "UI")
        this.addComponent(new TextLabel(), {fillStyle: "black", text: "0 points"})
        this.addComponent(new PointsController())
    }
}