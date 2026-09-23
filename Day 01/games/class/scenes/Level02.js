class Level02 extends Scene{
    constructor() {
        //Always needed for subclass. Calls the function from parent class
        super()
        // this.instantiate(new MainGameObject(), new Vector2(800, 500), 0)
        this.instantiate(new EnemyGameObject(), new Vector2(250, 100), Math.PI)
        this.instantiate(new EnemyGameObject(), new Vector2(150, 100), Math.PI)
        // this.instantiate(new PointsGameObject(), new Vector2(10, 30))
        this.instantiate(new LevelControllerGameObject())
    }
}

