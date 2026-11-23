class ClosingSceneController extends Component{
    start(){
        
    }
    update(){
        if (Input.keysDownThisFrame.includes("Backspace")) {
            SceneManager.nextScene = ClosingScene
        }
    }
}
