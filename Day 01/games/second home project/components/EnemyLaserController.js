class EnemyLaserController extends Component {
    // The default settings
    laserSpeed = 100
    laserDamage = 1
    laserXScale = 1
    laserYScale = 1
    laserColor = "magenta"
    addXPosition = 0
    addYPosition = 0
    xDirection = -1
    targetTag = "MainShip"

    isActive = true

    fireLaser(laserSpeed, laserDamage, laserXScale, laserYScale, laserColor, addXPosition, addYPosition) {
        if (!this.isActive) {
            return
        }

        let enemyLaser = new LaserGameObject()
        enemyLaser.transform.scale = new Vector2(laserXScale, laserYScale)
        let objectPosition = this.transform.position
        instantiate(enemyLaser, new Vector2(objectPosition.x + addXPosition, objectPosition.y + addYPosition), Math.PI)
        enemyLaser.getComponent(Polygon).fillStyle = laserColor
        enemyLaser.getComponent(LaserController).direction = -1
        enemyLaser.getComponent(LaserController).targetTag = "MainShip"
    }

    reset() {
        this.isActive = false
    }
}