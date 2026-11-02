class LaserGameObject extends GameObject{
    constructor(){
        super("Laser", [], "lasers")
        let laserController = new LaserController()

        this.addComponent(laserController)
        this.addComponent(new Polygon(), {points:Assets.laser})

        this.transform.scale = new Vector2(0.25, 0.5)

        this.addComponent(new Collider())
    }
}