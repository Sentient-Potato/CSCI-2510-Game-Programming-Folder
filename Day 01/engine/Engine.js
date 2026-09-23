class Engine{
    static canvas

    static ctx

    static currentScene

    static start(nextScene) {
        //Grab the canvas element and put it into an element name
        Engine.canvas = document.querySelector("#canv")

        Engine.ctx = Engine.canvas.getContext("2d")

        //keyboard stalker 1
        addEventListener("keydown", Input.keydown)
        //keyboard stalker 2
        addEventListener("keyup", Input.keyup)

        SceneManager.nextScene = nextScene

        requestAnimationFrame(Engine.gameLoop)
    }

    static gameLoop() {
        SceneManager.update()

        //Update and draw
        Engine.update()
        Engine.draw()

        Time.update()

        //...then call the game loop again the next time the browser refresh
        requestAnimationFrame(Engine.gameLoop)
    }

    static update() {
        SceneManager.currentScene.start()
        SceneManager.currentScene.update()
    }

    static draw() {
        //Expand the side of the canvas to match the browser window
        //Note that this also clears the canvas for us
        Engine.canvas.width = window.innerWidth
        Engine.canvas.height = window.innerHeight
        
        SceneManager.currentScene.draw(Engine.ctx)
    }

}