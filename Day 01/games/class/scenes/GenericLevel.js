class GenericLevel extends Scene {
    constructor() {
        super()
        let mainGameObject = this.instantiate(new MainGameObject(), new Vector2(200, 300), 0)
        this.instantiate(new PointsGameObject(), new Vector2(10, 30))

        let helperGameObject = this.instantiate(new HelperGameObject(), new Vector2(100, 100))
        
        helperGameObject.transform.setParent(mainGameObject.transform)
        //this.instantiate(new SceneTimerGameObject(), new Vector2(10, 80))

        /*
        let wrappedText = new GameObject("WrappedText", [], "UI")
        wrappedText.addComponent(new MultiLineTextLabel(), {fillStyle:"gray", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", font:"30px Times"})
        this.instantiate(wrappedText, new Vector2(0, 100))
        */
    }
}
