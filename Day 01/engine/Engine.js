class Engine{
    static canvas

    static ctx

    static start() {
        //Grab the canvas element and put it into an element name
        Engine.canvas = document.querySelector("#canv")

        Engine.ctx = Engine.canvas.getContext("2d")

        //keyboard stalker 1
        addEventListener("keydown", Input.keydown)
        //keyboard stalker 2
        addEventListener("keyup", Input.keyup)

        requestAnimationFrame(Engine.gameLoop)
    }

    static gameLoop() {
        //Update and draw
        Engine.update()
        Engine.draw()

        //...then call the game loop again the next time the browser refresh
        requestAnimationFrame(Engine.gameLoop)
    }

    static update() {
        //temp code will be changed on Wednesday day04
        update(0.4, 0.1)
    }

    static draw() {
        //Expand the side of the canvas to match the browser window
        //Note that this also clears the canvas for us
        Engine.canvas.width = window.innerWidth
        Engine.canvas.height = window.innerHeight
        draw(Engine.ctx)
    }

}