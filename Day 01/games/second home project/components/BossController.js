class BossController extends Component {
    direction = 1

    laserTier = 1

    topLaserTimer = 0
    middleLaserTimer = 0
    bottomLaserTimer = 0

    topLaserInterval = 1
    middleLaserInterval = 1
    bottomLaserInterval = 1

    summonMinionTimer = 0
    summonMinionInterval = 4

    start() {
        this.laserController = new EnemyLaserController()
        this.gameObject.addComponent(this.laserController)
    }

    update() {
        if(this.gameObject.getComponent(Health).health <= 0)
            this.gameObject.destroy()
        
        this.transform.position.y += Time.deltaTime * 100 * this.direction
        if (this.transform.position.y > Globals.maxYcoordinate-400) 
            this.direction = -1

        if (this.transform.position.y < 0)
            this.direction = 1

        if (this.laserTier == 1) {
            this.middleLaserTimer += Time.deltaTime

            if (this.middleLaserTimer >= this.middleLaserInterval) {
                this.middleLaserTimer = 0
                this.laserController.fireLaser(200, 1, 0.75, 0.5, "red", 100, 225)
                this.middleLaserInterval = Math.random() * 3 + 0.1
            }
        }

        if (this.laserTier == 2) {
            this.topLaserTimer += Time.deltaTime
            this.bottomLaserTimer += Time.deltaTime
        
            if (this.topLaserTimer >= this.topLaserInterval) {
                this.topLaserTimer = 0
                this.laserController.fireLaser(200, 1, 0.75, 0.5, "red", 100, 75)
                this.topLaserInterval = Math.random() * 1.6 + 0.1
            }
            if (this.bottomLaserTimer >= this.bottomLaserInterval) {
                this.bottomLaserTimer = 0
                this.laserController.fireLaser(200, 1, 0.75, 0.5, "red", 100, 375)
                this.bottomLaserInterval = Math.random() * 3 + 0.1
            }
        }
        
        if (this.laserTier == 3) {
            this.topLaserTimer += Time.deltaTime
            this.middleLaserTimer += Time.deltaTime
            this.bottomLaserTimer += Time.deltaTime
        
            if (this.topLaserTimer >= this.topLaserInterval) {
                this.topLaserTimer = 0
                this.laserController.fireLaser(200, 1, 0.75, 0.5, "red", 100, 75)
                this.topLaserInterval = Math.random() * 1.6 + 0.1
            }

            if (this.middleLaserTimer >= this.middleLaserInterval) {
                this.middleLaserTimer = 0
                this.laserController.fireLaser(200, 1, 0.75, 0.5, "red", 100, 225)
                this.middleLaserInterval = Math.random() * 3 + 0.1
            }

            if (this.bottomLaserTimer >= this.bottomLaserInterval) {
                this.bottomLaserTimer = 0
                this.laserController.fireLaser(200, 1, 0.75, 0.5, "red", 100, 375)
                this.bottomLaserInterval = Math.random() * 3 + 0.1
            }
        }

        this.summonMinionTimer += Time.deltaTime
        if (this.summonMinionTimer >= this.summonMinionInterval) {
            this.summonMinionTimer = 0
            let randomYPosition = Math.random() * 300 + 75
            let randomSpeed = Math.random() * 120 + 120
            this.summonEnemyShip(randomYPosition, randomSpeed)
            this.summonMinionInterval = Math.random() * 4 + 1
        }
    }

    summonEnemyShip(addYPosition, enemySpeed) {
        let minion = new EnemyShipGameObject(-1, enemySpeed)
        let bossPosition = this.transform.position
        instantiate(minion, new Vector2(bossPosition.x - 100, bossPosition.y + addYPosition))
    }
}