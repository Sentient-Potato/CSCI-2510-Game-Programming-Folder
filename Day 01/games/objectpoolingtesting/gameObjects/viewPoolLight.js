class viewPoolLight extends GameObject{
    constructor(){
        super("viewPoolLight", [], "UI")
        this.addComponent(new Polygon(), {fillStyle: 'red', points: Assets.square})
        this.transform.scale =  new Vector2(10, 10)
    }
}
