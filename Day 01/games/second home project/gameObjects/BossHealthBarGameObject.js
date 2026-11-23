class BossHealthBarGameObject extends RectGameObject {
    constructor() {
        super("BossHealthBar", [], "UI")

        this.addComponent(new Polygon(), {fillStyle: "red", points: Assets.rectangle})
        this.transform.scale = new Vector2(1, 1)

        this.addComponent(new BossHealthBarController())
        this.transform.useLetterBoxing = false
    }
}

/*
class UIButton extends RectGameObject{
    constructor(){
        super("UIButton", [], "UI")
        this.addComponent(new Polygon(), {fillStyle: 'green', points: Assets.square, alpha: 0.5})
        //this.addComponent(new Collider())
        //this.addComponent(new RigidBody())
        //this.addComponent(new UIButtonController)
        //this.transform.scale = new Vector2(1,1)
        this.transform.useLetterBoxing = false
    }
}
*/