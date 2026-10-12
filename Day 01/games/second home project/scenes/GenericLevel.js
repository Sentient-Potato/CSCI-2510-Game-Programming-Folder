class GenericLevel extends Scene {
    constructor() {
        super("black")
        this.instantiate(new GameAreaGameObject(), new Vector2(0, 0), 0)
        this.instantiate(new MainGameObject(), new Vector2(1200, 200), 0)
        this.instantiate(new BossGameObject(), new Vector2(Globals.maxXcoordinate-200, -100), 0)
        this.instantiate(new PointsGameObject(), new Vector2(12, 130))
        
        this.instantiate(new PlayerHeartGameObject(), new Vector2(10, 10))
        this.instantiate(new PlayerHealthGameObject(), new Vector2(30, 60))
    }
}


