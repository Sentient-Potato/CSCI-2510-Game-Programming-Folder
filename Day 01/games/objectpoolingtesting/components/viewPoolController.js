class viewPoolController extends Component{
    start() {
        this.viewLightObject = instantiate(new viewPoolLight(), new Vector2(20, 20))
        this.viewingPool = false
        this.buffer = 0
    }

    update(){
        this.buffer += Time.deltaTime

        if (!this.viewingPool && Input.keysDown.includes("Space") && this.buffer >= 2) {
            Camera.main.transform.position.x = -800
            Camera.main.transform.position.y = -800
            this.viewingPool = true
            this.buffer = 0
            this.viewLightObject.getComponent(Polygon).fillStyle = "green"
        }

        if (Input.keysDown.includes("Space") && this.viewingPool && this.buffer >= 2) {
            Camera.main.transform.position.x = 0
            Camera.main.transform.position.y = 0
            this.viewingPool = false
            this.buffer = 0
            this.viewLightObject.getComponent(Polygon).fillStyle = "red"
        }
    }
}

// Press a button to view where the pool objects are on the screen for testing.
            // let laserGameObject = instantiate(new LaserGameObject(), this.transform.position.clone())
            // laserGameObject.getComponent(Polygon).fillStyle = "blue"