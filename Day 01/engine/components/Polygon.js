class Polygon extends Component{
    fillStyle = "magenta"
    points = []

    draw(ctx) {
        let position = this.transform.position

        //This signals to the context that we're going to draw something (Prof note)
        ctx.save()

        //Set center of our object (Prof note)
        ctx.translate(position.x, position.y)

        ctx.beginPath()

        for(const point of this.points){
            ctx.lineTo(point.x, point.y)
        }

        // ctx.lineTo(0,-5)
        // ctx.lineTo(15,-20)
        // ctx.lineTo(30,10)
        // ctx.lineTo(0,50)
        // ctx.lineTo(-30,10)
        // ctx.lineTo(-15,-20)

        ctx.fillStyle = this.fillStyle
        ctx.fill()

        //This signals that we're done drawing (Prof note)
        ctx.restore()
    }


}