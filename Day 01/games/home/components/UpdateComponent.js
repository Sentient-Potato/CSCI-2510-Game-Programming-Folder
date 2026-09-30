class UpdateComponent extends Component {
    update() {
        if(Input.keysDown.includes("ArrowRight") || Input.keysDown.includes("KeyD")){
            UpdateDirection.updateDirection("R", this.gameObject.image)
        }

        if(Input.keysDown.includes("ArrowLeft") || Input.keysDown.includes("KeyA")){
            UpdateDirection.updateDirection("L", this.gameObject.image)
        }
        
        if(Input.keysDown.includes("ArrowUp") || Input.keysDown.includes("KeyW")){
            UpdateDirection.updateDirection("U", this.gameObject.image)
        }

        if(Input.keysDown.includes("ArrowDown") || Input.keysDown.includes("KeyS")){
            UpdateDirection.updateDirection("D", this.gameObject.image)
        }

        this.transform.position.x += Time.deltaTime * UpdateVelocity.velocityX
        this.transform.position.y += Time.deltaTime * UpdateVelocity.velocityY
    }
}
