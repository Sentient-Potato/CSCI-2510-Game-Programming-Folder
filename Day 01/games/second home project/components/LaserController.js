class LaserController extends Component{
    direction = 1
    speed = 120
    targetTag = "Enemy"
    damage = 1

    update(){
        this.transform.position.x += Time.deltaTime * this.speed * this.direction

        if(this.transform.position.x > Globals.maxXcoordinate || this.transform.position.x < 90){
            this.gameObject.destroy()
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
    }
    onCollisionStay(other) {
        if (!other.tags || !other.tags.includes(this.targetTag)) 
            return
        
        let health = other.getComponent(Health)

        if (health) 
            health.health -= this.damage
        
        this.gameObject.destroy()

        if (this.targetTag == "MainShip") {
            let gameObjects = GameObject.findGameObjectByType(Transform)
            for (const gameObject of gameObjects) {
                gameObject.broadcastMessage("updateHealth", [this.damage])
            }
        }

        if (this.targetTag == "Enemy") {
            let gameObjects = GameObject.findGameObjectByType(Transform)
            for (const gameObject of gameObjects) {
                gameObject.broadcastMessage("updateHealth", [this.damage])
                gameObject.broadcastMessage("updatePoints", [1])
            }
        }
    }
}
