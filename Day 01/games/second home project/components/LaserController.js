class LaserController extends Component{
    update(){
        this.transform.position.x += Time.deltaTime * 120

        if(this.transform.position.x > Globals.maxXcoordinate){
            this.gameObject.destroy()
        }

        let myPosition = this.transform.position
        let enemyGameObjects = GameObject.findGameObjectsWithTag("Enemy")

        for (const enemyGameObject of enemyGameObjects) {
            let enemyPosition = enemyGameObject.transform.position
            let distance = myPosition.minus(enemyPosition).magnitude

            // Collision check for now. Improve later.
            if (distance < 90) {
                this.gameObject.destroy()

                let healthComponent = enemyGameObject.getComponent(Health)
                healthComponent.health --

                let gameObjects = GameObject.findGameObjectByType(Transform)
                for (const gameObject of gameObjects)
                    gameObject.broadcastMessage("updatePoints", [1])

            }
        }
        // Collision check
        // let myPosition = this.transform.position
        // let enemyGameObjects = GameObject.findGameObjectsWithTag("Enemy")

        // for (const enemyGameObject of enemyGameObjects){
        //     let enemyPosition = enemyGameObject.transform.position
        //     let distance = myPosition.minus(enemyPosition).magnitude

        //     if(distance < 20){
        //         this.gameObject.destroy()
        //         // enemyGameObject.destroy()
        //         let healthComponent = enemyGameObject.getComponent(Health)
        //         healthComponent.health --
        //         //Globals.points ++
        //         let gameObjects = GameObject.findGameObjectByType(Transform)
        //         for (const gameObject of gameObjects) {
        //             gameObject.broadcastMessage("updatePoints", [1])
        //         }
        //     }
        // }
    }
}