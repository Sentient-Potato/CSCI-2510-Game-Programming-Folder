class EnemyShipGameObject extends GameObject {
    constructor() {
        super("Enemy", ["Enemy"], "ships")
        this.addComponent(new Polygon(), {fillStyle: "darkRed", points:Assets.enemyShip})
    }
}