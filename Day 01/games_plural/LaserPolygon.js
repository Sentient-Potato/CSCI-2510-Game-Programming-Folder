class LaserPolygon extends Component{
        draw(ctx) {
        let position = this.transform.position

        //This signals to the context that we're going to draw something (Prof note)
        ctx.save()

        //Set center of our object (Prof note)
        ctx.translate(position.x, position.y)

        ctx.beginPath()
        ctx.lineTo(0,-10)
        ctx.lineTo(5,5)
        ctx.lineTo(5,5)

        ctx.fillStyle = "Red"
        ctx.fill()

        //This signals that we're done drawing (Prof note)
        ctx.restore()
    }
}