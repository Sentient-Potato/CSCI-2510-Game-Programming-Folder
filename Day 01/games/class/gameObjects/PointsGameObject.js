class PointsGameObject extends GameObject{
    constructor(){
        super("PointsGameObject", [], "UI")
        this.addComponent(new TextLabel(), {font: "28px sans serif", text: "0 points"})
        this.addComponent(new PointsController())
    }
}