class inPoolTrackerGameObject extends GameObject{
    constructor(){
        super("inPoolTrackerGameObject", ["in"], "UI")
        let inPool = this.addComponent(new TextLabel(), {font: "28px sans serif", text: "In pool: 0"})


    }
}

/*
Text that tracks the objects IN the pool
*/
