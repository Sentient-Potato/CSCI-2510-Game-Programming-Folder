class squareGameObject extends GameObject{
    constructor(){
        super("squareGameObject", [], "default")
        this.addComponent(new Polygon(), {fillStyle: 'magenta', points: Assets.square})
        //this.addComponent(new Collider())
        //this.addComponent(new RigidBody())
        //this.addComponent(new squareGameObjectController)
        this.transform.scale = new Vector2(20, 20)
    }
}
