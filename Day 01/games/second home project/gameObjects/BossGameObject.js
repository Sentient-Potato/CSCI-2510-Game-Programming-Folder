class BossGameObject extends GameObject {
    constructor() {
        super("Boss", ["Boss", "Enemy"], "boss")
        let bossController = new BossController()
        
        this.addComponent(new Polygon(), {fillStyle: "red", points:Assets.alienBoss})
        this.addComponent(bossController)
        this.transform.scale = new Vector2 (2, 2)
        this.addComponent(new Health(), {health: Globals.bossHealth})

        this.addComponent(new Collider())
    }
}