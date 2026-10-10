class EnemyShipGameObject extends GameObject {
    constructor() {
        super("Enemy", ["Enemy"], "ships")
        this.addComponent(new Polygon(), {fillStyle: "darkRed", points:Assets.enemyShip})
        this.addComponent(new EnemyController())
        this.addComponent(new Health(), {health: 2})
    }
}