class squareGameObject extends GameObject{
    constructor(){
        super("squareGameObject", [], "default")
        this.addComponent(new Polygon(), {fillStyle: 'magenta', points: Assets.square})
        this.transform.scale = new Vector2(20, 20)
    }

    reset() {
        this.transform.position.y = -500
        this.transform.position.x = -500
    }
}
