class PlayerHealthPercentageController extends Component {
    update() {
        let healthPercent = (Globals.playerHealth / Globals.playerMaxHealth) * 100
        this.gameObject.getComponent(TextLabel).text = Math.round(healthPercent) + "%"
    }

    updateHealth(delta) {
        let damage = delta / Globals.playerMaxHealth
        Globals.playerHealth -= damage * Globals.playerMaxHealth
    }
}