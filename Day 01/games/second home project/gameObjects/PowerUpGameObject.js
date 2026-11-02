class PowerUpGameObject extends GameObject{
    constructor(){
        super("PowerUpGameObject", [], "power-up")
        this.addComponent(new Polygon(), {fillStyle: 'magenta', points: Assets.square})
        this.transform.scale = new Vector2(0.5, 0.5)
        //this.addComponent(new Collider())
        //this.addComponent(new RigidBody())
        //this.addComponent(new PowerUpGameObjectController)
    }
}
