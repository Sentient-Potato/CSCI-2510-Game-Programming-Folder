class TileMapLoader extends Component {
    
}





// Tile map from Kenny Yip Coding
// X = wall, O = skip, P = pac man, ' ' = food
// Ghosts: b = blue, o = orange, p = pink, r = red
// const tileMap = [
//     "XXXXXXXXXXXXXXXXXXX",
//     "X        X        X",
//     "X XX XXX X XXX XX X",
//     "X                 X",
//     "X XX X XXXXX X XX X",
//     "X    X       X    X",
//     "XXXX XXXX XXXX XXXX",
//     "OOOX X       X XOOO",
//     "XXXX X XXrXX X XXXX",
//     "O       bpo       O",
//     "XXXX X XXXXX X XXXX",
//     "OOOX X       X XOOO",
//     "XXXX X XXXXX X XXXX",
//     "X        X        X",
//     "X XX XXX X XXX XX X",
//     "X  X     P     X  X",
//     "XX X X XXXXX X X XX",
//     "X    X   X   X    X",
//     "X XXXXXX X XXXXXX X",
//     "X                 X",
//     "XXXXXXXXXXXXXXXXXXX" 
// ];

// function loadMap() {
//     walls.clear()
//     foods.clear()
//     ghosts.clear()

//     for (let r = 0; r < rowCount; r++){
//         for (let c = 0; c < columnCount; c++){
//             const row = tileMap[r];
//             const tileMapChar = row[c];

//             const x = c * tileSize
//             const y = r * tileSize

//             if(tileMapChar == 'X') {
//                 const wall = new Block(wallImage, x, y, tileSize, tileSize);
//                 walls.add(wall);
//             }
//             else if (tileMapChar == 'b') {
//                 const ghost = new Block(blueGhostImage, x, y, tileSize, tileSize);
//                 ghosts.add(ghost);
//             }
//             else if (tileMapChar == 'o') {
//                 const ghost = new Block(orangeGhostImage, x, y, tileSize, tileSize);
//                 ghosts.add(ghost);
//             }
//             else if (tileMapChar == 'p') {
//                 const ghost = new Block(pinkGhostImage, x, y, tileSize, tileSize);
//                 ghosts.add(ghost);
//             }
//             else if (tileMapChar == 'r') {
//                 const ghost = new Block(redGhostImage, x, y, tileSize, tileSize);
//                 ghosts.add(ghost);
//             }
//             else if (tileMapChar == 'P') {
//                 pacman = new Block(pacmanRightImage, x, y, tileSize, tileSize);
//             }
//             else if (tileMapChar == ' ') {
//                 const food = new Block(null, x + 14, y + 14, 4, 4);
//                 foods.add(food);
//             }
//         }
//     }
// }