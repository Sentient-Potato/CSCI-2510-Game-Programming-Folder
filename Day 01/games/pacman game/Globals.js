class Globals {
    static points = 0
    static lives = 3
    static tileSize = 32
    static boardWidth = 19 * this.tileSize
    static boardHeight = 21 * this.tileSize

    static windowBoardCenterX = (window.innerWidth - this.boardWidth)/2
    static windowBoardCenterY = (window.innerHeight - this.boardHeight)/2
}