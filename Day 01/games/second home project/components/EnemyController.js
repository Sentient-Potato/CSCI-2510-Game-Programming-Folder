class EnemyController extends Component{
    xDirection = 1
    speed = 70

    shipCollisionDamage = 5

    yRandomTimer = 0
    yRandomInterval = Math.random() * 2 + 0.5
    ySpeed = Math.random() * 180 + 20
    yDirection = Math.random() < 0.5 ? 1 : -1

    laserTimer = 0
    laserInterval = 1

    start() {
        this.laserController = new EnemyLaserController()
        this.gameObject.addComponent(this.laserController)
    }

    update(){
        this.transform.position.x += Time.deltaTime * this.speed * this.xDirection

        this.yRandomTimer += Time.deltaTime
        if (this.yRandomTimer >= this.yRandomInterval) {
            this.yRandomTimer = 0

            this.yDirection = Math.random() < 0.5 ? 1 : -1
            this.ySpeed = Math.random() * 180 + 20
            
            this.yRandomInterval = Math.random() * 2 + 0.5
        }

        this.transform.position.y += Time.deltaTime * this.ySpeed * this.yDirection
        
        if(this.transform.position.x < 0 || this.transform.position.y < 0 || this.transform.position.y > Globals.maxYcoordinate - 60){
            this.gameObject.destroy()
        }

        if(this.gameObject.getComponent(Health).health <= 0){
            this.gameObject.destroy()
        }

        let currentPosition = this.transform.position
        let playerGameObjects = GameObject.findGameObjectsWithTag("MainShip")

        for (const playerGameObject of playerGameObjects) {
            let playerPosition = playerGameObject.transform.position
            let distance = currentPosition.minus(playerPosition).magnitude

            if (distance < 30) {
                this.gameObject.destroy()

                let healthComponent = playerGameObject.getComponent(Health)
                healthComponent.health -= this.shipCollisionDamage
                let gameObjects = GameObject.findGameObjectByType(Transform)
                for (const gameObject of gameObjects) 
                gameObject.broadcastMessage("updateHealth", [this.shipCollisionDamage])
            }
        }

        this.laserTimer += Time.deltaTime
        if (this.laserTimer >= this.laserInterval) {
            this.laserTimer = 0
            this.laserController.fireLaser(300, 1, 0.5, 0.25, "yellow", 80, 50)
            this.laserInterval = Math.random() * 1 + 0.5
        }
            
    }
/*
    fireLaser(addYPosition) {
        let enemyLaser = new LaserGameObject(-1, "MainShip", 400, 1)
        enemyLaser.transform.scale = new Vector2(0.5, 0.25)
        let enemyPosition = this.transform.position
        instantiate(enemyLaser, new Vector2(enemyPosition.x + 80, enemyPosition.y + addYPosition), Math.PI)
        enemyLaser.getComponent(Polygon).fillStyle = "yellow"
    }
        */
}

