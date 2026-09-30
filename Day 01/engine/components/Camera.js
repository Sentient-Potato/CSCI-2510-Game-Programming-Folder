class Camera extends Component {
    backgroundColor = "#ede8ea"
    static get main() {
        return GameObject.findGameObjectsWithTag("MainCamera")[0].getComponent(Camera)
    }
}