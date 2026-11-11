class squareGameObject extends GameObject{
    constructor(){
        super("squareGameObject", [], "default")
        this.addComponent(new Polygon(), {fillStyle: 'magenta', points: Assets.square})
        this.transform.scale = new Vector2(20, 20)
        //this.addComponent(new squareObjectController())
    }

    spawn(x, y) {
        this.transform.position.x = x
        this.transform.position.y = y
    }
    
    reset() {
        this.transform.position.y = -500
        this.transform.position.x = -500
        this.getComponent(Polygon).fillStyle = 'magenta'
        this.transform.scale = new Vector2(20, 20)
    }
}
