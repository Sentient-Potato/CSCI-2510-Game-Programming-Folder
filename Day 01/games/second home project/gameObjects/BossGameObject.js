class BossGameObject extends GameObject {
    constructor() {
        super("Boss", ["Boss", "Enemy"], "boss")
        this.addComponent(new Polygon(), {fillStyle: "red", points:Assets.alienBoss})
    }
}




// class EnemyGameObject extends GameObject{
//     constructor(){
//         super("Enemy", ["Enemy"], "ships")
//         this.addComponent(new Polygon(), {fillStyle: "seagreen", points:Assets.shape})
//         this.addComponent(new EnemyController())
//         this.addComponent(new Health(), {health: 2})
//     }
// }