export class ObjectPooler {
    constructor(factoryFn, poolSize) {
        // factoryFn (factory function) creates objects. Can be any function that creates and returns a new object.
        // The object pooler doesn't need to know how the factoryFn works
        this.factoryFn = factoryFn

        // poolSize to populate the pool, how many inactive objects do we want ready in the pool
        // Key idea, the object pooler contains 2 arrays. ObjectPooler's job is to move objects between pool and active
        this.pool = [] // Holds the inactive objects
        this.active = [] // Holds the active objects being updated and drawn
        
        // Pre-populate the "pool". Code runs the moment an instance is created using a keyword(?)
        // Run a for loop, if the poolSize is 20, the loop runs 20 times
        for (let i = 0; i < poolSize; i++) {
            this.pool.push(this.factoryFn()) // Pushes 1 new pooled object into the array
        }

    }

    // Retrieves and activates an object from the object pool when called. Pulls the object from the "pool" and puts it in the "active" array
    // When we want to spawn an object, call get() to activate one. 
    // Method checks if object is available in the pool, if so, activates it and moves it into "active"
    // If none are available, the method creates a new one and pushes it so the pool always gives us an object to reuse
    get() {
        // Helper variable
        let obj;

        // Checks if there are objects left in the pool.
        if (this.pool.length > 0) {
            obj = this.pool.pop() // Will take the last item in "pool" and returns it to the helper function
        }
        // If no objects are available in the pool
        else {
            obj = this.factoryFn(); // Create a new item with this function
            console.log("[DEV] Pool expanded, created a new object.")
        }

        // Pushes obj into active array
        this.active.push(obj)

        return obj
    }

    // Loops through all active objects and call their update methods
    updateAll(dt, ...args) {
        // dt = deltaTime
        // ...args means any number of additional arguments that might be used

        // Updates in reverse from end to beginning
        // For loop cycles through all objects in the "active" array
        // Updates in reverse because some objects might deactivate themselves
        // If we update forwards, the index will shift and we might accidentally skip objects or cause errors
        for (let i = this.active.length - 1; i >= 0; i--) {
            const obj = this.active[i] // Stores in temp variable that points to each item in array as index changes
            obj.update(dt, ...args)

            // If object is no longer active
            if (!obj.active) {
                this.releaseAll(obj) // Moves the object from "active" back to "pool"
            }
        }

    }

    // Deactive an object, resets the object, and return it to the pool
    release(obj) {
        const index = this.active.indexOf(obj) // Finds the object in the active array, returns the position of the object or -1 if not found
        if (index > -1) {
            this.active.splice(index, 1) // Remove the element at that index
            obj.reset() // Make sure all pooled objects have a reset() method that restores them to default state
            this.pool.push(obj) // Back to pool
            // The object is removed from "active", reset to default, and pushed back into "pool"
        }
    }

    // Deactivate and resets all objects and return them into the pool
    releaseAll() {
        for (let i = 0; i < this.active.length; i++) {
            this.active[i].reset() // Goes through all active object in "active" by i and resets them to their default
            this.pool.push(this.active[i]) // Pushes back into "pool"
        }
        this.active = [] // Ensures that "active" is empty
    }
}