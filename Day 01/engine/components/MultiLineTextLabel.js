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

        //let measurement = ctx.measureText(this.text)
        let fontHeight = ctx.measureText("").fontBoundingBoxAscent + ctx.measureText("").fontBoundingBoxDescent 
        let y = 0
        let safeLine = ""
        let possibleLine = ""

        for (let word of this.text.split(" ")) {
            possibleLine = safeLine + " " + word
            if (ctx.measureText(possibleLine).width > this.maxWidth) { // Something is hella wrong
                ctx.fillText(safeLine, 0, y)
                y += fontHeight
                safeLine = word + " "
            }
            else {
                safeLine = possibleLine
            }
        }
        ctx.fillText(possibleLine, 0, y)

        //ctx.fillText(this.text, 0, 0)

        //This signals that we're done drawing (Prof note)
        ctx.restore()
    }
}