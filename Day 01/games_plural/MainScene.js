class MainScene extends Scene{
    constructor() {
        //Always needed for subclass. Calls the function from parent class
        super()
        this.instantiate(new MainGameObject(), new Vector2(100, 100))
    }
}