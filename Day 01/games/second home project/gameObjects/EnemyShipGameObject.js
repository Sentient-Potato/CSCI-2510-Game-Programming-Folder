class EnemyShipGameObject extends GameObject {
    constructor(xDirection = 1, speed = 120) {
        super("Enemy", ["Enemy"], "enemyships")

        const ENEMY_POOL_SIZE = 12 // First testing with pool size 12. Remember to check console to see if this is big enough

        this.pool = new ObjectPooler(() => {this.createEnemy()}, ENEMY_POOL_SIZE)

        let enemyController = new EnemyController()
        enemyController.xDirection = xDirection
        enemyController.speed = speed

        //this.addComponent(new Polygon(), {fillStyle: "darkRed", points:Assets.enemyShip})
        this.addComponent(enemyController)

        //this.addComponent(new EnemyLaserController())

        // this.addComponent(new Health(), {health: 3})
        // this.addComponent(new Collider())
    }
    // Nah, redo this stuff later
    createEnemy() {
        this.addComponent(new Polygon(), {fillStyle: "darkRed", points:Assets.enemyShip})
        // Might need to move this back?
        this.addComponent(new Health(), {health: 3})
        this.addComponent(new Collider())
    }
}