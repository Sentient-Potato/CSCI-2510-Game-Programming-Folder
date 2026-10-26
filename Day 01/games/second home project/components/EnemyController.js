class EnemyController extends Component{
    xDirection = 1
    speed = 70

    shipCollisionDamage = 5

    yRandomTimer = 0
    yRandomInterval = Math.random() * 2 + 0.5
    ySpeed = Math.random() * 160 + 20
    yDirection = Math.random() < 0.5 ? 1 : -1

    laserTimer = 0
    laserInterval = 1

    // sort of a debug statement to stop enemies from firing lasers
    stopLasers = true

    isActive = false

    start() {
        this.laserController = new EnemyLaserController()
        this.gameObject.addComponent(this.laserController)
    }

    update(){
        if (!this.isActive) {
            return
        }

        this.transform.position.x += Time.deltaTime * this.speed * this.xDirection

        this.yRandomTimer += Time.deltaTime
        if (this.yRandomTimer >= this.yRandomInterval) {
            this.yRandomTimer = 0

            this.yDirection = Math.random() < 0.5 ? 1 : -1
            this.ySpeed = Math.random() * 160 + 20
            
            this.yRandomInterval = Math.random() * 2 + 0.5
        }

        this.transform.position.y += Time.deltaTime * this.ySpeed * this.yDirection
        
        if(this.transform.position.x < 0 || this.transform.position.y < 0 || this.transform.position.y > Globals.maxYcoordinate - 60){
            //this.gameObject.destroy()
            this.isActive = false
            return
        }

        if(this.gameObject.getComponent(Health).health <= 0){
            //this.gameObject.destroy()
            this.isActive = false

            let pointObjects = GameObject.findGameObjectByType(Transform)
                for (const pointObject of pointObjects) {
                    pointObject.broadcastMessage("updatePoints", [5])
                }

            return
        }

        if (!this.stopLasers) {
            this.laserTimer += Time.deltaTime
            if (this.laserTimer >= this.laserInterval) {
                this.laserTimer = 0
                this.laserController.fireLaser(300, 1, 0.5, 0.25, "yellow", 80, 50)
                this.laserInterval = Math.random() * 1 + 0.5
            }
        }
    }

    reset() {
        this.isActive = false
        let health = this.gameObject.getComponent(Health)
        health = 3
    }

    onCollisionStay(other) {
        if (!other.tags.includes("MainShip"))
            return

        let health = other.getComponent(Health)

        if (health)
            health.health -= this.shipCollisionDamage

        let gameObjects = GameObject.findGameObjectByType(Transform)
        for (const gameObject of gameObjects) {
            gameObject.broadcastMessage("updateHealth", [this.shipCollisionDamage])
            //this.gameObject.destroy()
            this.isActive = false
        }
    }
}

