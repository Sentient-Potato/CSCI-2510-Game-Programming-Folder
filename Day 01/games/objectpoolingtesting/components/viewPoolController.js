class viewPoolController extends Component{
    start() {
        this.viewingPool = false
        this.buffer = 0
    }

    update(){
        this.buffer += Time.deltaTime

        if (!this.viewingPool && Input.keysDown.includes("Space") && this.buffer >= 2) {
            Camera.main.transform.position.x = -500
            Camera.main.transform.position.y = -500
            this.viewingPool = true
            this.buffer = 0
        }

        if (Input.keysDown.includes("Space") && this.viewingPool && this.buffer >= 2) {
            Camera.main.transform.position.x = 0
            Camera.main.transform.position.y = 0
            this.viewingPool = false
            this.buffer = 0
        }
    }
}

// Press a button to view where the pool objects are on the screen for testing.
//         Camera.main.transform.position = this.transform.position.clone()