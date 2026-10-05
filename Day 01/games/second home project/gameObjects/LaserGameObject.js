class LaserGameObject extends GameObject{
    constructor(){
        super("Laser", [], "lasers")
        this.addComponent(new LaserController())
        this.addComponent(new Polygon(), {points:Assets.laser})
        this.transform.scale = new Vector2(0.25, 0.5)
    }
}


