class LivesController extends Component {
    update() {
        this.gameObject.getComponent(TextLabel).text = Globals.lives + " lives"
    }
}