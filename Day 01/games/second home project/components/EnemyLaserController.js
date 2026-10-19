class EnemyLaserController extends Component {
    laserSpeed = 100
    laserDamage = 1
    laserXScale = 1
    laserYScale = 1
    laserColor = "red"
    addXPosition = 0
    addYPosition = 0

    fireLaser(laserSpeed, laserDamage, laserXScale, laserYScale, laserColor, addXPosition, addYPosition) {
        let enemyLaser = new LaserGameObject(-1, "MainShip", laserSpeed, laserDamage)
        enemyLaser.transform.scale = new Vector2(laserXScale, laserYScale)
        let objectPosition = this.transform.position
        instantiate(enemyLaser, new Vector2(objectPosition.x + addXPosition, objectPosition.y + addYPosition), Math.PI)
        enemyLaser.getComponent(Polygon).fillStyle = laserColor
    }

}