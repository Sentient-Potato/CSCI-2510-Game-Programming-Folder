class Assets {
    // Loading the images, I hope
    static wallImage = new Image();
    static {this.wallImage.src = "pacman-images/wall.png"}

    static blueGhostImage = new Image();
    static {this.blueGhostImage.src = "pacman-images/blueGhost.png"}
    static orangeGhostImage = new Image();
    static {this.orangeGhostImage.src = "pacman-images/orangeGhost.png"}
    static pinkGhostImage = new Image();
    static {this.pinkGhostImage.src = "pacman-images/pinkGhost.png"}
    static redGhostImage = new Image();
    static {this.redGhostImage.src = "pacman-images/redGhost.png"}

    static pacmanUpImage = new Image();
    static {this.pacmanUpImage.src = "pacman-images/pacmanUp.png"}
    static pacmanDownImage = new Image();
    static {this.pacmanDownImage.src = "pacman-images/pacmanDown.png"}
    static pacmanLeftImage = new Image();
    static {this.pacmanLeftImage.src = "pacman-images/pacmanLeft.png"}
    static pacmanRightImage = new Image();
    static {this.pacmanRightImage.src = "pacman-images/pacmanRight.png"}

    static foodPellet = [
        new Vector2(0, 0),
        new Vector2(14, 0),
        new Vector2(14, 14),
        new Vector2(0, 14)
    ]
}