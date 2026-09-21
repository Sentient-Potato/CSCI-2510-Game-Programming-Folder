class DrawComponent extends Component{
    draw(ctx) {
        let position = this.transform.position

        //This signals to the context that we're going to draw something (Prof note)
        ctx.save()

        //Set center of our object (Prof note)
        ctx.translate(position.x, position.y)

        ctx.beginPath()
        ctx.lineTo(0,-5)
        ctx.lineTo(15,-20)
        ctx.lineTo(30,10)
        ctx.lineTo(0,50)
        ctx.lineTo(-30,10)
        ctx.lineTo(-15,-20)

        ctx.fillStyle = "Pink"
        ctx.fill()

        //This signals that we're done drawing (Prof note)
        ctx.restore()
    }


}