class SquareGameObject extends GameObject{
  constructor(){
    super("SquareGameObject", [], "default")
    this.addComponent(new Polygon(), {fillStyle: "pink", points: Assets.square})
    this.addComponent(new SquareController())
    this.addComponent(new Collider())
    this.addComponent(new RigidBody())

    this.transform.scale = new Vector2(20, 20)
  }
}
