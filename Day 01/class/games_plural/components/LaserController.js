class LaserController extends Component{
    update(){
        this.transform.position.y -= Time.deltaTime * 90

        if(this.transform.position.y < 50){
            this.gameObject.destroy()
        }

        // Collision check
        let myPosition = this.transform.position
        let enemyGameObject = GameObject.find("Enemy")

        if(enemyGameObject){
            let enemyPosition = enemyGameObject.transform.position
            let distance = myPosition.minus(enemyPosition).magnitude

            if(distance < 20){
                this.gameObject.destroy()
                // enemyGameObject.destroy()
                let healthComponent = enemyGameObject.getComponent(Health)
                healthComponent.health --
            }
        }
    }
}