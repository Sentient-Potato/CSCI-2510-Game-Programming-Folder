class UpdateDirection extends Component {
    static directions_list = ["U", "D", "L", "R"]

    static direction = "R"

    static updateDirection(direction, image) {
        this.direction = direction

        UpdateVelocity.updateVelocity()

        if (direction == "R") 
            image.ImagePath = Assets.pacmanRightImage
        else if (direction == "L") 
            image.ImagePath = Assets.pacmanLeftImage
        else if (direction == "U") 
            image.ImagePath = Assets.pacmanUpImage
        else if (direction == "D") 
            image.ImagePath = Assets.pacmanDownImage
    }
}