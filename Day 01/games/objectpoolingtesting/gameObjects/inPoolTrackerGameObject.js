class inPoolTrackerGameObject extends GameObject{
    constructor(){
        super("inPoolTrackerGameObject", ["in"], "UI")
        this.addComponent(new TextLabel(), {font: "28px sans serif", text: "In pool: 0", textAlign: "center"})
        this.addComponent(new poolTrackerController())
    }
}

/*
Text that tracks the objects IN the pool
class PointsGameObject extends GameObject{
    constructor(){
        super("PointsGameObject", [], "UI")
        this.addComponent(new TextLabel(), {font: "28px sans serif", fillStyle: "white", text: "0 points", textAlign: "center"})
        this.addComponent(new PointsController())
    }
}
*/

