class MainGameObject extends GameObject {
    constructor(){
        super("Main", ["MainShip"], "ships")
        this.addComponent(new UpdateComponent())
        this.addComponent(new Polygon(), {fillStyle: "pink", points:Assets.heart})
        this.transform.scale = new Vector2(1.5, 1.5)
    }
}

