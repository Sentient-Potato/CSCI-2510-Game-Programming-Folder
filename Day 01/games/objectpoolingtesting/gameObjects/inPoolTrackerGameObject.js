class inPoolTrackerGameObject extends GameObject{
    constructor(){
        super("inPoolTrackerGameObject", ["in"], "UI")
        this.addComponent(new TextLabel(), {font: "28px sans serif", text: "In pool: 0", textAlign: "center"})
        this.addComponent(new poolTrackerController())
    }
}

