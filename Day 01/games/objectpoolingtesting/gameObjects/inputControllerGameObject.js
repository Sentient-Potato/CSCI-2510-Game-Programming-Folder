class inputControllerGameObject extends GameObject{
    constructor(){
        super("inputControllerGameObject", [], "UI")
        //this.addComponent(new Polygon(), {fillStyle: 'magenta', points: Assets.triangle})
        //this.addComponent(new Collider())
        //this.addComponent(new RigidBody())
        //this.addComponent(new clickCreateGameObjectController)
        //this.transform.scale = new Vector2(1,1)
        //this.addComponent(new clickCreateController())
        this.addComponent(new viewPoolController())
        this.addComponent(new squareObjectController())

        this.addComponent(new poolTrackerController())
    }
}
