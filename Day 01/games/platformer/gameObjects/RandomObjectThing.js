class RandomObjectThing extends GameObject{
    constructor(){
        super("RandomObjectThing", [], "default")
        this.addComponent(new Polygon(), {fillStyle: 'magenta', points: Assets.biggerTriangle})
    }
}
