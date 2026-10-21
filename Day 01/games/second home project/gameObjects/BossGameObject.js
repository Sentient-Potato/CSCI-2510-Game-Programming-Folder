class BossGameObject extends GameObject {
    constructor(laserTier = 1) {
        super("Boss", ["Boss", "Enemy"], "boss")
        let bossController = new BossController()
        bossController.laserTier = laserTier
        
        this.addComponent(new Polygon(), {fillStyle: "red", points:Assets.alienBoss})
        this.addComponent(bossController)
        this.transform.scale = new Vector2 (2, 2)
        this.addComponent(new Health(), {health: Globals.bossHealth})

        this.addComponent(new Collider())
    }
}