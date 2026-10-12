class PlayerHealthGameObject extends GameObject {
    constructor() {
        super("PlayerHealthGameObject", [], "UI")
        this.addComponent(new TextLabel(), {fillStyle: "white", text: "100%"})
    }
}