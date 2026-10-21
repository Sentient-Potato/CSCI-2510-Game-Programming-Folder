class PowerUpSlotGameObject extends GameObject {
    constructor() {
        super("PowerUpSlotGameObject", [], "UI")
        this.addComponent(new Polygon(), {fillStyle: "#AAAAAA88", points:Assets.roundedSquare})
        this.transform.scale = new Vector2(0.65, 0.65)
        this.addComponent(new PowerUpSlotController())
    }
}

/*
class PlayerHeartGameObject extends GameObject {
    constructor() {
        super("PlayerHeartGameObject", [], "UI")
        this.addComponent(new Polygon(), {fillStyle: "#b00c38", points:Assets.heart})
    }
}
*/