class BoardGameObject extends GameObject {
    constructor() {
        super("Board")
        // More for reference than anything
        this.addComponent(new Polygon(), {fillStyle: "black", points:Assets.board})
        
    }
}