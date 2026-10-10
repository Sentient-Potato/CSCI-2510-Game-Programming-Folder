class BossController extends Component {
    direction = 1

    update() {
        this.transform.position.y += Time.deltaTime * 100 * this.direction
        if (this.transform.position.y > Globals.maxYcoordinate-400) 
            this.direction = -1

        if (this.transform.position.y < 0)
            this.direction = 1

        if (this.gameObject.getComponent(Health).health <= 0) 
            this.gameObject.destroy()
    }
}



// class EnemyController extends Component{
//     direction = 1

//     update(){
//         this.transform.position.x += Time.deltaTime * 70 * this.direction
//         if(this.transform.position.x > 400){
//             this.direction = -1
//         }
//         if(this.transform.position.x < 75)
//             this.direction = 1
        
//         if(this.gameObject.getComponent(Health).health <= 0){
//             this.gameObject.destroy()
//         }
//     }
// }