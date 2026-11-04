class clickCreateController extends Component{
    update(){
        if (Input.mouseButtonsDownThisFrame.includes(0)) {
            console.log("Left mouse button has been clicked.")
        }
    }
}

/*
What this should do
- Get a squareGameObject from a pool and put it on screen where the mouse is when clicked
- Put a squareGameObject back into the pool if there are none left in the pool (FIFO system)




if (Input.mouseBUttonDownThisFrame.includes(0))
0 = left
1 = right



*/
