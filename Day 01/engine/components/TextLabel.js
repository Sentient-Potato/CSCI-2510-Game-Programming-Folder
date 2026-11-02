class TextLabel extends Component{
    fillStyle = "black"
    text = "[BLANK]"
    font = "10px arial"

    textAlign = "left" // Horizontal alignment: "center", "left", and "right"
    textBaseline = "alphabetic" // Vertical alignment: "top", "hanging", "middle", "alphabetic", "ideographic", "bottom"
    // Look at w3schools graphics canvas text alignment for visual reference

    draw(ctx) {
        //let position = this.transform.position

        //This signals to the context that we're going to draw something (Prof note)
        ctx.save()

        //Set center of our object (Prof note)
        // ctx.translate(this.transform.position.x, this.transform.position.y)
        // ctx.scale(this.transform.scale.x, this.transform.scale.y)
        // ctx.rotate(this.transform.rotation)

        ctx.fillStyle = this.fillStyle
        ctx.font = this.font
        ctx.textAlign = this.textAlign
        ctx.textBaseline = this.textBaseline


        ctx.fillText(this.text, 0, 0)

        //This signals that we're done drawing (Prof note)
        ctx.restore()
    }
}