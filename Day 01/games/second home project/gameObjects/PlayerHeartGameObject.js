class PlayerHeartGameObject extends GameObject {
    constructor() {
        super("PlayerHeartGameObject", [], "UI")
        this.addComponent(new Polygon(), {fillStyle: "#b00c38", points:Assets.heart})
    }
}