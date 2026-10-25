class UpdateComponent extends Component {
    speed = 200
    canMove = true
    
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
            let laserGameObject = instantiate(new LaserGameObject(1, "Enemy", 120, 1), this.transform.position.clone())
            laserGameObject.getComponent(Polygon).fillStyle = "lime"
        }

        if (this.gameObject.transform.position.y <= 0)
            this.gameObject.transform.position.y = 0
        if (this.gameObject.transform.position.y >= Globals.maxYcoordinate - 40)
            this.gameObject.transform.position.y = Globals.maxYcoordinate - 40

        if (this.gameObject.transform.position.x <= 0)
            this.gameObject.transform.position.x = 0
        if (this.gameObject.transform.position.x >= Globals.maxXcoordinate - 300)
            this.gameObject.transform.position.x = Globals.maxXcoordinate - 300
        

        Camera.main.transform.position = this.transform.position.clone()

        if(this.gameObject.getComponent(Health).health <= 0){
            this.gameObject.destroy()
        }

    }
}