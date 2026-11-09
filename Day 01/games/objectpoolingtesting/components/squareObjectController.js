class squareObjectController extends Component{
    start(){
        this.randomCreateAttr = true
        this.active = false
        const SQUARE_POOL_SIZE = 5
        this.pool = new ObjectPooler(() => {this.createSquare()}, SQUARE_POOL_SIZE)
        
    }

    update(){
        if (Input.mouseButtonsDownThisFrame.includes(0)) {
            console.log("Left mouse button has been clicked.")
        }
        if (!this.active) {
            return
        }
    }

    createSquare() {
        if (!this.randomCreateAttr) {
            let square = instantiate(new squareGameObject(), new Vector2(-1000, -1000))
            return square
        }

        else if (this.randomCreateAttr) {
            let randomOne = Math.floor(Math.random() * 100 + 300)
            let randomTwo = Math.floor(Math.random() * 20 + 150)
            let randomFlip = Math.floor(Math.random() * 2)
            let coinFlip
            if (randomFlip == 1) {
                coinFlip = -1
            }
            else {
                coinFlip = 1
            }
            let randomCoord = randomOne + randomTwo * coinFlip
            const colors = [
                "pink", "purple", "orange", "blue", "yellow", "cyan", "black", "red", "green", "lime", "magenta", "brown", 
                "#9932CC", "#8B008B", "#FF1493", "#FFD700", "#4B0082", "#7FFFD4", "#FFFACD"
            ]
            let randomIndex = Math.floor(Math.random() * colors.length)
            let square = instantiate(new squareGameObject(), new Vector2(-1000 + randomCoord, -1000 + randomCoord))
            square.getComponent(Polygon).fillStyle = colors[randomIndex]
            return square
        }
    }

    // spawnSquare(x, y) { // Figure this out
    //     const square = this.pool.get()
    // }
    
    reset() {

    }
}