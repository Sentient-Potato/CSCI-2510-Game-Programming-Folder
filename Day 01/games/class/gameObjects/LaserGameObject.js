class LaserGameObject extends GameObject{
    constructor(){
        super("Laser")
        this.addComponent(new LaserController())
        this.addComponent(new Polygon(), {fillStyle: "Red", points:Assets.laser})
        this.transform.scale = new Vector2(0.15, 0.75)
    }
}


