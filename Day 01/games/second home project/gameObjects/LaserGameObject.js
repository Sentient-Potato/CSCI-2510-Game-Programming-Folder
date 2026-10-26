class LaserGameObject extends GameObject{
    constructor(direction = 1, targetTag = "Enemy", speed = 120, damage = 1){
        super("Laser", [], "lasers")

        // const LASER_POOL_SIZE = 120
        // this.pool = new ObjectPooler(() => {this.createLaser()}, LASER_POOL_SIZE)

        let laserController = new LaserController()
        laserController.direction = direction
        laserController.targetTag = targetTag
        laserController.speed = speed
        laserController.damage = damage

        this.addComponent(laserController)
        this.addComponent(new Polygon(), {points:Assets.laser})

        this.transform.scale = new Vector2(0.25, 0.5)

        this.addComponent(new Collider())
    }

    // createLaser() {
    //     // attempting to move this into one function for object pooling
    //     this.addComponent(new Polygon(), {points:Assets.laser})

    //     this.transform.scale = new Vector2(0.25, 0.5)

    //     this.addComponent(new Collider())
    // }
    // Laser is being spawned in UpdateComponent.js for player and EnemyLaserController.js for enemies. Try to instantiate them here?
    // instantiateLaser() {

    // }
    // let laserGameObject = instantiate(new LaserGameObject(1, "Enemy", 120, 20), this.transform.position.clone())
    
}


