class LaserGameObject extends GameObject{
    constructor(){
        super("Laser", [], "lasers")
        this.addComponent(new LaserController())
        this.addComponent(new Polygon(), {fillStyle: "Red", points:Assets.laser})
        this.transform.scale = new Vector2(0.75, 0.25)
    }
}


