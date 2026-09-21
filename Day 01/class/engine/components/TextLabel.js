class TextLabel extends Component{
    fillStyle = "black"
    text = "[BLANK]"

    draw(ctx) {
        let position = this.transform.position

        //This signals to the context that we're going to draw something (Prof note)
        ctx.save()

        //Set center of our object (Prof note)
        ctx.translate(position.x, position.y)
        ctx.scale(this.transform.scale.x, this.transform.scale.y)
        ctx.rotate(this.transform.rotation)

        ctx.fillStyle = this.fillStyle

        ctx.fillText(this.text, 0, 0)

        //This signals that we're done drawing (Prof note)
        ctx.restore()
    }
}