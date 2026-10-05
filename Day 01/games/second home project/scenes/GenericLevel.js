class GenericLevel extends Scene {
    constructor() {
        super()
        this.instantiate(new GameAreaGameObject(), new Vector2(0, 0), 0)
        this.instantiate(new MainGameObject(), new Vector2(50, 200), 0)
        this.instantiate(new BossGameObject(), new Vector2(800, 400), 0)
        this.instantiate(new PointsGameObject(), new Vector2(10, 30))
        //Camera.main.backgroundColor = "black"
    }
}