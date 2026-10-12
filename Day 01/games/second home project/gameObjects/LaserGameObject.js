class LaserGameObject extends GameObject{
    constructor(direction = 1, targetTag = "Enemy", speed = 120, damage = 1){
        super("Laser", [], "lasers")
        let laserController = new LaserController()
        laserController.direction = direction
        laserController.targetTag = targetTag
        laserController.speed = speed
        laserController.damage = damage

        this.addComponent(laserController)
        this.addComponent(new Polygon(), {points:Assets.laser})

        this.transform.scale = new Vector2(0.25, 0.5)
    }
}


