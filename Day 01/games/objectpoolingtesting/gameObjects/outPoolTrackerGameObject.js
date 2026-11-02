class outPoolTrackerGameObject extends GameObject{
    constructor(){
        super("inPoolTrackerGameObject", ["out"], "UI")
        let inPool = this.addComponent(new TextLabel(), {font: "28px sans serif", text: "In pool: 0"})


    }
}

/*
Text that tracks the objects OUT the pool
*/