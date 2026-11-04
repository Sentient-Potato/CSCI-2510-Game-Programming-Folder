class outPoolTrackerGameObject extends GameObject{
    constructor(){
        super("outPoolTrackerGameObject", ["out"], "UI")
        let outPool = this.addComponent(new TextLabel(), {font: "28px sans serif", text: "Out pool: 0"})


    }
}

/*
Text that tracks the objects OUT the pool
*/