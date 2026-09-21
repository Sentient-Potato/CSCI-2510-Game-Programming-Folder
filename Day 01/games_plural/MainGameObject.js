class MainGameObject extends GameObject {
    constructor(){
        super()
        this.addComponent(new UpdateComponent())
        this.addComponent(new Polygon(), {fillStyle: "pink", points: 
        [
            new Vector2(0,-5),
            new Vector2(15,-20),
            new Vector2(30,10),
            new Vector2(0,50),
            new Vector2(-30,10),
            new Vector2(-15,-20)
        ]})
    }
}