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
    }
}
// I was trying to copy it, but change the tag to "MainShip"

/*

if(this.timeSinceLastLaser > 30 && Input.keysDown.includes("Space")){
            this.timeSinceLastLaser = 0
            let laserGameObject = instantiate(new LaserGameObject(), this.transform.position.clone())
            laserGameObject.getComponent(Polygon).fillStyle = "lime"
        }
*/