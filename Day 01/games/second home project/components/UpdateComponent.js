class UpdateComponent extends Component {
    speed = 200
    
    start() {
        this.timeSinceLastLaser = 0
    }

    update() {
        this.timeSinceLastLaser += 1
        
        if(Input.keysDown.includes("ArrowRight") || Input.keysDown.includes("KeyD"))
            this.transform.position.x = this.gameObject.transform.position.x + Time.deltaTime * this.speed

        if(Input.keysDown.includes("ArrowLeft") || Input.keysDown.includes("KeyA"))
            this.transform.position.x = this.gameObject.transform.position.x - Time.deltaTime * this.speed
        
        if(Input.keysDown.includes("ArrowUp") || Input.keysDown.includes("KeyW")) 
            this.transform.position.y = this.gameObject.transform.position.y - Time.deltaTime * this.speed

        if(Input.keysDown.includes("ArrowDown") || Input.keysDown.includes("KeyS"))
            this.transform.position.y = this.gameObject.transform.position.y + Time.deltaTime*  this.speed

        if(this.timeSinceLastLaser > 30 && Input.keysDown.includes("Space")){
            this.timeSinceLastLaser = 0
            let laserGameObject = instantiate(new LaserGameObject(), this.transform.position.clone())
            laserGameObject.getComponent(Polygon).fillStyle = "lime"
        }

        Camera.main.transform.position = this.transform.position.clone()

    }
}