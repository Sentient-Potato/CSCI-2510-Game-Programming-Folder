class CoinGameObject extends GameObject{
    constructor(){
        super("CoinGameObject", [], "default")
        this.addComponent(new Polygon(), {fillStyle: '#EFBF04', points: Assets.square})
        this.addComponent(new Collider(), {isTrigger: true})
        //this.addComponent(new RigidBody())
        //this.addComponent(new CoinGameObjectController)
        this.transform.scale = new Vector2(10,10)
    }
}
