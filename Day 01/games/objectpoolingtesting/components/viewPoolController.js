class viewPoolController extends Component{
    start() {
        this.viewingPool = false
    }

    update(){
        if (!this.viewingPool && Input.keysDown.includes("Space")) {
            Camera.main.transform.position.x = -500
            Camera.main.transform.position.y = -500
            this.viewingPool = true
        }

        if (Input.keysDown.includes("Space") && this.viewingPool) {
            Camera.main.transform.position.x = 0
            Camera.main.transform.position.y = 0
            this.viewingPool = false
        }
    }
}

// Press a button to view where the pool objects are on the screen for testing.
//         Camera.main.transform.position = this.transform.position.clone()