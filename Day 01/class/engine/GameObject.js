class GameObject {
    components = []

    markForDestroy = false

    name

    get transform(){
        return this.components[0]; 
    }

    constructor(name){
        this.addComponent(new Transform())
        this.name = name
    }

    addComponent(component, parameters){
        Object.assign(component, parameters)
        this.components.push(component)
        component.gameObject = this
    }

    start() {
        for(const component of this.components){
            component.start?.()
        }
    }

    update() {
        for(const component of this.components) {
            component.update?.()
        }
    }

    draw(ctx) {
        for(const component of this.components) {
            component.draw?.(ctx)
        }
    }

    destroy(){
        this.markForDestroy = true
    }

    getComponent(type){
        return this.components.find(c => c instanceof type)
    }

    static find(name){
        // Same as Engine.currentScene.gameObjects.find(function(go){return go.name == name})
        // Like Python's lambda x: x == y
        return Engine.currentScene.gameObjects.find(go => go.name == name)
    }
}