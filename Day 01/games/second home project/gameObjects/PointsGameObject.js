class PointsGameObject extends GameObject{
    constructor(){
        super("PointsGameObject", [], "UI")
        this.addComponent(new TextLabel(), {font: "28px sans serif", fillStyle: "white", text: "0 points", textAlign: "center"})
        this.addComponent(new PointsController())
    }
}