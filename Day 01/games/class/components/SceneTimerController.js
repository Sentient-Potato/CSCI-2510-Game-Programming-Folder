class SceneTimerController extends Component {
    startTime
    start() {
        this.startTime = Time.time 
    }
    
    update() {
        let sceneTime = Time.time - this.startTime

        sceneTime = Math.floor(sceneTime * 100) / 100

        let sceneTimeMinutes = 0
        let sceneTimeSeconds = 0

        sceneTimeMinutes = Math.floor(sceneTime / 10)
        sceneTimeSeconds = (Math.floor((sceneTime % 10) * 100) / 100)

        this.gameObject.getComponent(TextLabel).text = sceneTimeMinutes + ":" + sceneTimeSeconds
    }
}
