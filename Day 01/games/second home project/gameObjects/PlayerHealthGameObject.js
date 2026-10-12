class PlayerHealthGameObject extends GameObject {
    constructor() {
        super("PlayerHealthGameObject", [], "UI")
        this.addComponent(new TextLabel(), {font: "28px sans serif", fillStyle: "white", text: "100%"})
        this.addComponent(new PlayerHealthPercentageController())
    }
}