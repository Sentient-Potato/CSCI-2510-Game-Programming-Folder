class squareObjectController extends Component{
    start(){
        this.randomCreateAttr = false
        this.active = false
        const SQUARE_POOL_SIZE = 5
        this.pool = new ObjectPooler(() => {return this.createSquare()}, SQUARE_POOL_SIZE)
        
    }

    update(){
        if (Input.mouseButtonsDownThisFrame.includes(0)) {
            console.log("Left mouse button has been clicked.")
            const square = this.pool.get()

            square.transform.position = this.mousePos()

        }
        if (!this.active) {
            return
        }
    }

    createSquare() {
        if (!this.randomCreateAttr) {
            let square = instantiate(new squareGameObject(), new Vector2(-1000, -1000))
            square.active = false
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
    
    reset() {

    }

    mousePos() {
        if (Input.mousePosition) { // Put this math in the component.
            let matrix = new DOMMatrix()
            matrix.translateSelf(Engine.canvas.width/2, Engine.canvas.height/2)
            if (Engine.cameraWidthInWorldSpace) {
                const scalar = Engine.cameraWidthInWorldSpace/(Engine.canvas.width - Engine.letterBoxingWidth)
                matrix.scaleSelf(1/scalar, 1/scalar)
            }
            matrix.multiplySelf(Camera.main.transform.getWorldMatrix().inverse())

            let worldPositionDOMPoint = matrix.inverse().transformPoint(Input.mousePosition)
            let worldPosition = new Vector2(worldPositionDOMPoint.x, worldPositionDOMPoint.y)
            return worldPosition
        }
    }
}

/*
To Do:
- Create reset() function
- Try moving !active in update() to fixedUpate()
- Try having randomCreateAttri only apply when active = false but apply default settings when active. 
- If the above is successful, reverse it (minus random positioning, only random colors)
*/