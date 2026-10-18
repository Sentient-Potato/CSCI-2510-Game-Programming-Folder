class Collisions {
    static isCollisionPointPolygon(point, gameObject) {
        // Move everything into world space
        let worldSpacePoints = []
        for (let point of gameObject.getComponent(Polygon).points) {
            worldSpacePoints.push(
                new Vector2(
                    gameObject.transform.getWorldMatrix().transformPoint(point).x, 
                    gameObject.transform.getWorldMatrix().transformPoint(point).y
                )
            )
        }

        // Find the axes for projection
        for (let i = 0; i < worldSpacePoints.length; i++) {
            let point1 = worldSpacePoints[i]
            let point2 = worldSpacePoints[(i + 1) % worldSpacePoints.length]
            let edge = point2.minus(point1)
            let axis = edge.orthogonal()

            // Check for overlap
            let pointProjection = point.dot(axis)
            let polygonProjections = worldSpacePoints.map(p=>p.dot(axis))
            if (pointProjection < Math.min(...polygonProjections) || pointProjection > Math.max(...polygonProjections)) 
                return false
        }

        return true
    }
}