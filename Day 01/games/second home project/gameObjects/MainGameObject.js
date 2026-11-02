class MainGameObject extends GameObject {
    constructor(){
        super("Main", ["MainShip"], "ships")
        this.addComponent(new UpdateComponent())
        this.addComponent(new Polygon(), {fillStyle: "pink", points:Assets.mainShip})
        this.addComponent(new Health(), {health: Globals.playerHealth})

        this.addComponent(new Collider())
    }
}

