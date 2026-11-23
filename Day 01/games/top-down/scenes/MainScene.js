class MainScene extends Scene{
  constructor(){
    super()
    this.instantiate(new SquareGameObject(), new Vector2(0,0), 0)

    this.instantiate(new BoxGameObject(), new Vector2(50, -8), 0)

    const uiButton = this.instantiate(new UIButton())
    // uiButton.transform.anchorMin = new Vector2(1, 1)
    // uiButton.transform.anchorMax = new Vector2(1, 1)
    // uiButton.transform.offsetUpperLeft = new Vector2(-150, -150)
    // uiButton.transform.offsetLowerRight = new Vector2(-50, -50)
    uiButton.transform.anchorMin = new Vector2(0.5, 1)
    uiButton.transform.anchorMax = new Vector2(0.5, 1)
    uiButton.transform.offsetUpperLeft = new Vector2(-700, -710)
    uiButton.transform.offsetLowerRight = new Vector2(700, -680)
    
    // Testing HTML colors, putting here cuz I'm too lazy to move to a different game
    let colorSquare = this.instantiate(new SquareGameObject(), new Vector2(-700, -300))
    colorSquare.getComponent(Transform).scale = new Vector2(50, 50)
    colorSquare.getComponent(Polygon).fillStyle = "Aqua"

      const closingSceneControllerGameObject = new GameObject("Closing Scene Controller", [], "UI")
      closingSceneControllerGameObject.addComponent(new ClosingSceneController())
      this.instantiate(closingSceneControllerGameObject)
  }
}
