class GenericLevel extends Scene {
    constructor() {
        super()
        this.instantiate(new BoardGameObject(), new Vector2(-Globals.boardWidth/2, -Globals.boardHeight/2))
        this.instantiate(new PointsGameObject(), new Vector2(10, 30))
        this.instantiate(new LivesGameObject(), new Vector2(10, 70))
        this.instantiate(new PacManGameObject(), new Vector2(0, 0))
    }
}




// class GenericLevel extends Scene {
//     constructor() {
//         super()
//         this.instantiate(new MainGameObject(), new Vector2(800, 500), 0)
//         this.instantiate(new PointsGameObject(), new Vector2(10, 30))
//     }
// }