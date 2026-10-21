class PowerUpSlotGameObject extends GameObject {
    constructor() {
        super("PowerUpSlotGameObject", [], "UI")
        this.addComponent(new Polygon(), {fillStyle: "#69696999", points:Assets.roundedSquare}) // haha, nice
        this.transform.scale = new Vector2(0.65, 0.65)

        this.addComponent(new PowerUpSlotController())
    }
}