class LaserController extends Component{
    direction = 1
    speed = 120
    targetTag = "Enemy"
    damage = 1

    hit = false

    isActive = false

    update(){
        if (this.hit)
            return

        if (!this.isActive) {
            return
        }

        // Try to set isActive to true in the gameObject file when the item is first created.
        // If it doesn't work, come back here and try to activate it here.

        this.transform.position.x += Time.deltaTime * this.speed * this.direction

        if(this.transform.position.x > Globals.maxXcoordinate || this.transform.position.x < 90){
            //this.gameObject.destroy()
            this.isActive = false
            return
        }

    }

    reset() {
        this.isActive = false
    }

    onCollisionStay(other) {
        if (this.hit)
            return

        if (!other.tags || !other.tags.includes(this.targetTag)) 
            return

        this.hit = true
        
        let health = other.getComponent(Health)

        if (health) 
            health.health -= this.damage
        
        //this.gameObject.destroy()
        this.isActive = false

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
