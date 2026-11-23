class BossHealthBarController extends Component {  
    update() {
        let bosses = GameObject.findGameObjectsWithTag("Boss")

        if (bosses.length == 0) {
            this.gameObject.destroy()
            return
        }

        let bossHealth = bosses[0].getComponent(Health).health
        let healthPercent = bossHealth / Globals.bossHealth

        healthPercent = Math.max(0, Math.min(1, healthPercent))

        this.transform.scale.x = healthPercent

    }


}

/*
    const uiButton = this.instantiate(new UIButton())
    // uiButton.transform.anchorMin = new Vector2(1, 1)
    // uiButton.transform.anchorMax = new Vector2(1, 1)
    // uiButton.transform.offsetUpperLeft = new Vector2(-150, -150)
    // uiButton.transform.offsetLowerRight = new Vector2(-50, -50)
    uiButton.transform.anchorMin = new Vector2(0.5, 1)
    uiButton.transform.anchorMax = new Vector2(0.5, 1)
    uiButton.transform.offsetUpperLeft = new Vector2(-700, -710)
    uiButton.transform.offsetLowerRight = new Vector2(700, -680)
*/