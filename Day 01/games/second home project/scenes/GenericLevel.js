class GenericLevel extends Scene {
    constructor() {
        super("black")
        this.instantiate(new GameAreaGameObject(), new Vector2(0, 0), 0)
        this.instantiate(new MainGameObject(), new Vector2(50, 200), 0)
        this.instantiate(new BossGameObject(), new Vector2(Globals.maxXcoordinate-300, -100), 0)
        this.instantiate(new PointsGameObject(), new Vector2(10, 30))
        this.instantiate(new EnemyShipGameObject(), new Vector2(300, 100), 0)
    }
}