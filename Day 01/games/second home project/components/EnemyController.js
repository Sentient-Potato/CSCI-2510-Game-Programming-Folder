class EnemyController extends Component{
    xDirection = 1
    speed = 70

    shipCollisionDamage = 5

    yRandomTimer = 0
    yRandomInterval = Math.random() * 2 + 0.5
    ySpeed = Math.random() * 180 + 20
    yDirection = Math.random() < 0.5 ? 1 : -1

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


    }
}

/*
        let myPosition = this.transform.position
        let enemyGameObjects = GameObject.findGameObjectsWithTag(this.targetTag)

        for (const enemyGameObject of enemyGameObjects) {
            let enemyPosition = enemyGameObject.transform.position
            let distance = myPosition.minus(enemyPosition).magnitude

            // Collision check for now. Improve later.
            if (distance < 90) {
                this.gameObject.destroy()

                if (this.targetTag == "Enemy") {
                    let healthComponent = enemyGameObject.getComponent(Health)
                    healthComponent.health -= this.damage
                    let gameObjects = GameObject.findGameObjectByType(Transform)
                    for (const gameObject of gameObjects)
                        gameObject.broadcastMessage("updatePoints", [1])
                }

                if (this.targetTag == "MainShip") {
                    let healthComponent = enemyGameObject.getComponent(Health)
                    healthComponent.health -= this.damage
                    let gameObjects = GameObject.findGameObjectByType(Transform)
                    for (const gameObject of gameObjects)
                        gameObject.broadcastMessage("updateHealth", [this.damage])
                }
            }
        }
*/
