class UpdateComponent extends Component{

    speed = 70

    start(){
        this.timeSinceLastLaser = 0
    }
    update() {
        //console.log(Input.keysDown) //Debug line, check in console
        this.timeSinceLastLaser += 1

        if(Input.keysDown.includes("ArrowRight"))
            this.transform.position.x = this.gameObject.transform.position.x + Time.deltaTime * this.speed

        if(Input.keysDown.includes("ArrowLeft"))
            this.transform.position.x = this.gameObject.transform.position.x - Time.deltaTime * this.speed
        
        if(Input.keysDown.includes("ArrowUp"))
            this.transform.position.y = this.gameObject.transform.position.y - Time.deltaTime * this.speed

        if(Input.keysDown.includes("ArrowDown"))
            this.transform.position.y = this.gameObject.transform.position.y + Time.deltaTime*  this.speed

        if(this.timeSinceLastLaser > 30){
            this.timeSinceLastLaser = 0
            instantiate(new LaserGameObject(), this.transform.position.clone())
        }

    }
}