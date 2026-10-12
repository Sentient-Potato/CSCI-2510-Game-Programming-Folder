class MultiLineTextLabel extends Component{
    fillStyle = "black"
    text = "[BLANK]"
    font = "10px arial"

    draw(ctx) {
        //let position = this.transform.position

        //This signals to the context that we're going to draw something (Prof note)
        ctx.save()

        ctx.fillStyle = this.fillStyle
        ctx.font = this.font

        let measurement = ctx.measureText(this.text)
        measurement // Finish this later by looking at GitHub

        ctx.fillText(this.text, 0, 0)

        //This signals that we're done drawing (Prof note)
        ctx.restore()
    }
}