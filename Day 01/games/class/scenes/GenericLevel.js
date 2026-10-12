class GenericLevel extends Scene {
    constructor() {
        super()
        let mainGameObject = this.instantiate(new MainGameObject(), new Vector2(200, 300), 0)
        this.instantiate(new PointsGameObject(), new Vector2(10, 30))

        let helperGameObject = this.instantiate(new HelperGameObject(), new Vector2(100, 100))
        
        helperGameObject.transform.setParent(mainGameObject.transform)
        //this.instantiate(new SceneTimerGameObject(), new Vector2(10, 80))

        let wrappedText = new GameObject("WrappedText", [], "UI")
        wrappedText.addComponent(new MultiLineTextLabel(), {fillStyle: "pink", text: "Random words are being put here. Abababababab. Words are here. This is for a test, yahoo, yay! Wee woo. Obtused rubber goose.", font: "30px"})
        this.instantiate(wrappedText, new Vector2(10, 0))

    }
}
