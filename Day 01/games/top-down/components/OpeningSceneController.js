class OpeningSceneController extends Component{
    start(){
        
    }
    update(){
        if (Input.keysDownThisFrame.includes("Space")) {
            SceneManager.nextScene = MainScene
        }
        
    }
}

