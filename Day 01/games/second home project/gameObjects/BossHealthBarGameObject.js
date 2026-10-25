class BossHealthBarGameObject extends GameObject {
    constructor() {
        super("BossHealthBar", [], "UI")

        this.addComponent(new Polygon(), {fillStyle: "red", points: Assets.rectangle})
        this.transform.scale = new Vector2(3, 0.25)

        this.addComponent(new BossHealthBarController())
    }
}