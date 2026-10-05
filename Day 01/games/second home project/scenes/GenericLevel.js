class GenericLevel extends Scene {
    constructor() {
        super()
        this.instantiate(new MainGameObject(), new Vector2(0, 0), 0)
        this.instantiate(new BossGameObject(), new Vector2(0, 0), 0)
    }
}