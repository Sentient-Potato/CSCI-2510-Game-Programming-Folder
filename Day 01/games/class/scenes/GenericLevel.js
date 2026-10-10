class GenericLevel extends Scene {
    constructor() {
        super()
        let mainGameObject = this.instantiate(new MainGameObject(), new Vector2(200, 300), 0)
        this.instantiate(new PointsGameObject(), new Vector2(10, 30))

        let helperGameObject = this.instantiate(new HelperGameObject(), new Vector2(100, 100))
        
        helperGameObject.transform.setParent(mainGameObject.transform)

    }
}