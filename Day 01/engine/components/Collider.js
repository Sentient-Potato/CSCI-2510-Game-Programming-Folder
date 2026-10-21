class Collider extends Component {
    __points
    get points() {
        return this.__points ?? this.gameObject.getComponent(Polygon).points
    }

    set points(points) {
        this.__points = points
    }
}