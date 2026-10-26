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
        // ...args means any number of additional arguments that might be used depending on the object being updated

        // Updates in reverse from end to beginning
        // For loop cycles through all objects in the "active" array
        // Updates in reverse because some objects might deactivate themselves
        // If we update forwards, the index will shift and we might accidentally skip objects or cause errors
        for (let i = this.active.length - 1; i >= 0; i--) {
            const obj = this.active[i] // Stores in temp variable that points to each item in array as index changes
            obj.update(dt, ...args)

            // If object is no longer active
            if (!obj.active) {
                this.release(obj) // Moves the object from "active" back to "pool"
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

/*
====================================

How to adapt objects into the pool. Notes from the video because I don't wanna make another game using Frankslaboratory's engine
just to test this out right now...

This was done in the Enemy.js file of the video. Probably translates to the component file of the enemy.

Each pooled object needs to have a flag that marks the object active or inactive.
Inside the class constructor, define a boolean variable (default is false) to act as the flag.
When an object is first created, the object will be deactivated by default. 
When the object is instantiated, the flag is set to true.
Each pooled object needs a reset() method.
Update methods should be update to stop running when the flag is false, i.e.:
if (!this.active) 
    return

example reset() code from video
reset() {
    this.active = false
    this.health = this.data.health (this resets the health)
}
    
====================================

Spawning objects from the pool.

This was done in the EnemyManager.js file of the video. Probably translates to the gameObject file of the enemy.

Obviously call it in the HTML file
Video defines a helper variable "const ENEMY_POOL_SIZE = 10"
Create a pool variable that is set to the ObjectPooler:
this.pool = new ObjectPooler(factoryFn, ENEMY_POOL_SIZE)

factoryFn needs to define the function that spawns the object. Video shows that it can be defined in the line:
this.pool = new ObjectPooler(() => {}), ENEMY_POOL_SIZE)

In the curly braces should be the function that creates the object. Spaces between brackets for readability. Video shows:
this.pool = new ObjectPooler( () => { return new Enemy(enemyData.drifter) } ), ENEMY_POOL_SIZE)

The "return" keyword is used to ensure that the line returns an object since the ObjectPooler is expecting an object to be RETURNED
Because the ObjectPooler is now creating objects for the program, the initial line that created the enemies before was no longer needed
In the video, there is a spawn(x, y) method that spawns one object. But, because of the ObjectPooler, the code is no longer hard-coded
Instead of creating an object manually, the spawn method takes an object from the pool stored in this.pool = new ObjectPooler() line by calling:
const enemy = this.pool.get()

Now spawn() is no longer responsible for spawning objects, but instead requests the objects from the pool that were already pre-made
After getting the object, the object then calls its old spawn() method from its component file, then returns the object from the pool and spawns it:
enemy.spawn(x, y)
return enemy

There is a function called getActiveEnemies() that was coded as:
getActiveEnemies() {
    return [this.enemy]    
}

Since all active objects are in the "active" array, the return statement is instead changed to "return this.pool.active"

The update method in the video was coded as:
update(dt, player) {
    this.enemy.update(dt, player)
}

Instead, the code is changed to "this.pool.updateAll(dt, player)" 
This is referencing to the updateAll function in ObjectPooler, which handles the updating for each object in the active pool. 

A new method is created: reset() where it calls the ObjectPooler's releaseAll() method:
reset() {
    this.pool.releaseAll()
}

Inside the game's Game.js file, Frankslaboratory adds in "this.enemyManager.reset()" under the startGame() method
This ensures that all pooled objects are deactivated and resets to their default settings

====================================
*/