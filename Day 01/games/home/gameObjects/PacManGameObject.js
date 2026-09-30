class PacManGameObject extends GameObject {
    constructor() {
        super("PacMan")
        this.addComponent(new UpdateComponent())

        this.image = new LoadImage(Assets.pacmanRightImage)
        this.addComponent(this.image)
    }
}