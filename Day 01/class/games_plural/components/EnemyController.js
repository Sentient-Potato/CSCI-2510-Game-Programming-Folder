class EnemyController extends Component{
    direction = 1

    update(){
        this.transform.position.x += Time.deltaTime * 100 * this.direction
        if(this.transform.position.x > 1400){
            this.direction = -1
        }
        if(this.transform.position.x < 75){
            this.direction = 1
        }
    }
}