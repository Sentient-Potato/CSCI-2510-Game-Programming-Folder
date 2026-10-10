class LoadImage extends Component {
    constructor(Image) {
        super()
        this.ImagePath = Image
    }

    draw(ctx) {
        ctx.drawImage(
            this.ImagePath, 
            this.transform.position.x, 
            this.transform.position.y,
            Globals.tileSize,
            Globals.tileSize
        )
    }
}