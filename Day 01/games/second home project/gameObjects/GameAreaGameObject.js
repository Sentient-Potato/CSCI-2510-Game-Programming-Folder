// Mainly serving as a temporary factor to establish the arena for reference
class GameAreaGameObject extends GameObject {
    constructor() {
        super("Arena", ["Temporary", "Background", "Arena"], "background")
        this.addComponent(new Polygon(), {fillStyle: "#210535", points:Assets.arena})
    }
}





// class MainGameObject extends GameObject {
//     constructor(){
//         super("Main", ["MainShip"], "ships")
//         this.addComponent(new UpdateComponent())
//         this.addComponent(new Polygon(), {fillStyle: "pink", points:Assets.mainShip})
//     }
// }






