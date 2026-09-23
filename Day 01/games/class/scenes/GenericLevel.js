class GenericLevel extends Scene {
    constructor() {
        super()
        this.instantiate(new MainGameObject(), new Vector2(800, 500), 0)
        this.instantiate(new PointsGameObject(), new Vector2(10, 30))
    }
}