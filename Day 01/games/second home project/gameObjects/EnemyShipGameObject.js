class EnemyShipGameObject extends GameObject {
    constructor(xDirection = 1, speed = 120) {
        super("Enemy", ["Enemy"], "ships")
        let enemyController = new EnemyController()
        enemyController.xDirection = xDirection
        enemyController.speed = speed
        this.addComponent(new Polygon(), {fillStyle: "darkRed", points:Assets.enemyShip})
        this.addComponent(enemyController)
        //this.addComponent(new EnemyLaserController())
        this.addComponent(new Health(), {health: 3})
    }
}