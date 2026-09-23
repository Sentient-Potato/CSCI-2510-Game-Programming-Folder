class EnemyGameObject extends GameObject{
    constructor(){
        super("Enemy", ["Enemy"])
        this.addComponent(new Polygon(), {fillStyle: "seagreen", points:Assets.shape})
        this.addComponent(new EnemyController())
        this.addComponent(new Health(), {health: 2})
    }
}