class BossHealthBarController extends Component {  
    update() {
        let bosses = GameObject.findGameObjectsWithTag("Boss")

        if (bosses.length == 0) {
            this.transform.scale.x = 0
            return
        }

        let bossHealth = bosses[0].getComponent(Health).health
        let healthPercent = bossHealth / Globals.bossHealth

        healthPercent = Math.max(0, Math.min(1, healthPercent))

        this.transform.scale.x = healthPercent

    }


}