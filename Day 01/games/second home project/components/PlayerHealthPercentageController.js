class PlayerHealthPercentageController extends Component {
    update() {
        this.gameObject.getComponent(TextLabel).text = Globals.playerHealth + "%"
    }

    updateHealth(delta) {
        Globals.points -= delta
    }
}