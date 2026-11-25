class GenericLevel extends Scene {
    constructor() {
        super("#03002e")
        this.instantiate(new GameAreaGameObject(), new Vector2(0, 0), 0)
        this.instantiate(new MainGameObject(), new Vector2(1200, 200), 0)
        this.instantiate(new BossGameObject(), new Vector2(Globals.maxXcoordinate-200, -100), 0)
        this.instantiate(new PointsGameObject(), new Vector2(90, 130))
        
        this.instantiate(new PlayerHeartGameObject(), new Vector2(40, 10))
        this.instantiate(new PlayerHealthGameObject(), new Vector2(90, 60))

        //this.instantiate(new PowerUpSlotGameObject(), new Vector2(10, 590))
    
        this.instantiate(new BossHealthBarGameObject(), new Vector2(250, 30))

        const powerUpSlotGameObject = this.instantiate(new PowerUpSlotGameObject())
        powerUpSlotGameObject.transform.anchorMin = new Vector2(0.5, 0.5)
        powerUpSlotGameObject.transform.anchorMax = new Vector2(0.5, 0.5)
        powerUpSlotGameObject.transform.offsetUpperLeft = new Vector2(2, 2)
        powerUpSlotGameObject.transform.offsetLowerRight = new Vector2(0, 0)
    }
}
/*
    const uiButton = this.instantiate(new UIButton())
    // uiButton.transform.anchorMin = new Vector2(1, 1)
    // uiButton.transform.anchorMax = new Vector2(1, 1)
    // uiButton.transform.offsetUpperLeft = new Vector2(-150, -150)
    // uiButton.transform.offsetLowerRight = new Vector2(-50, -50)
    uiButton.transform.anchorMin = new Vector2(0.5, 1)
    uiButton.transform.anchorMax = new Vector2(0.5, 1)
    uiButton.transform.offsetUpperLeft = new Vector2(-700, -710)
    uiButton.transform.offsetLowerRight = new Vector2(700, -680)
*/


