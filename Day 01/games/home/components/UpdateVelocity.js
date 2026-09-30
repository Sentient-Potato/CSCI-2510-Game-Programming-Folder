class UpdateVelocity extends Component {
    static velocityX = 0
    static velocityY = 0
    
    static tileSize = Globals.tileSize

    static updateVelocity() {
        if (UpdateDirection.direction == "U") {
            this.velocityX = 0
            this.velocityY = -this.tileSize * 4
        }
        else if (UpdateDirection.direction == "D") {
            this.velocityX = 0
            this.velocityY = this.tileSize * 4
        }
        else if (UpdateDirection.direction == 'L'){
            this.velocityX = -this.tileSize * 4
            this.velocityY = 0
        }
        else if (UpdateDirection.direction == 'R'){
            this.velocityX = this.tileSize * 4
            this.velocityY = 0
        }
    }
}
