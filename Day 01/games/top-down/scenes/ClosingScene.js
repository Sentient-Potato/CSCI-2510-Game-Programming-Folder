class ClosingScene extends Scene{
    constructor(){
        super("RebeccaPurple")
        const closingText = new RectGameObject("Opening Text", [], "UI")
        closingText.addComponent(new TextLabel(), {text: "Game End", textAlign: "center", textBaseLine: "middle", font: "28px sans"})
        closingText.transform.anchorMin = new Vector2(0.5, 0.25)
        closingText.transform.anchorMax = new Vector2(0.5, 0.25)
        closingText.transform.offsetLowerRight = new Vector2(2, 2)
        //openingText.transform.offsetUpperLeft = new Vector2(1, 1)
        closingText.transform.useLetterBoxing = true
        this.instantiate(closingText)

        const closingSceneControllerGameObject = new GameObject("Closing Scene Controller", [], "UI")
        closingSceneControllerGameObject.addComponent(new ClosingSceneController())
        this.instantiate(closingSceneControllerGameObject)
    }
}
