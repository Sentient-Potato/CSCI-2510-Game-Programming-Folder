class Polygon extends Component{
    fillStyle = "magenta"
    points = []
    alpha = 1

    draw(ctx) {
        //let position = this.transform.position

        //This signals to the context that we're going to draw something (Prof note)
        ctx.save()

        ctx.globalAlpha = this.alpha

        ctx.beginPath()

        for(const point of this.points){
            ctx.lineTo(point.x, point.y)
        }

        ctx.fillStyle = this.fillStyle
        ctx.fill()

        //This signals that we're done drawing (Prof note)
        ctx.restore()
    }


}