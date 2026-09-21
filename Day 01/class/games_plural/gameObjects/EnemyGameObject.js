class EnemyGameObject extends GameObject{
    constructor(){
        super("Enemy")
        this.addComponent(new Polygon(), {fillStyle: "seagreen", points:Assets.heart})
        this.addComponent(new EnemyController())
        this.addComponent(new Health(), {health: 2})
    }


}