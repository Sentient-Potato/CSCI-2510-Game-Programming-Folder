class GameObject {
    components = []

    markForDestroy = false

    name

    tags = []

    get transform(){
        return this.components[0]; 
    }

    constructor(name, tags = []){
        this.addComponent(new Transform())
        this.name = name
        this.tags = tags
    }

    addComponent(component, parameters){
        Object.assign(component, parameters)
        this.components.push(component)
        component.gameObject = this
    }

    start() {
        for(const component of this.components.filter(c => !c.didStart)){
            component.start?.()
            component.didStart = true
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
        // Same as SceneManager.currentScene.gameObjects.find(function(go){return go.name == name})
        // Like Python's lambda x: x == y
        return SceneManager.currentScene.gameObjects.find(go => go.name == name)
    }

    static findGameObjectsWithTag(tag){
        return SceneManager.currentScene.gameObjects.filter(go => go.tags.includes(tag))
    }
}