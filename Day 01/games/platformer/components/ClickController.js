class ClickController extends Component{
    update(){
        if (Input.mouseButtonsDownThisFrame.includes(0)) {
            console.log("Left mouse button has been clicked.")
            let object = instantiate(new RandomObjectThing())
            object.transform.position = Input.mousePosition.clone()
        }
        
    }
}

/*
    update(){
        if (Input.mouseButtonsDownThisFrame.includes(0)) {
            console.log("Left mouse button has been clicked.")
            const square = this.pool.get()

            square.transform.position = Input.mousePosition.clone()
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
*/