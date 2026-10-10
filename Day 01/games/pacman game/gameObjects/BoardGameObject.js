class BoardGameObject extends GameObject {
    constructor() {
        super("Board", [], "background")
        this.addComponent(new Polygon(), {fillStyle: "black", points:Assets.board})
    }
}