class SquareGameObject extends GameObject{
  constructor(){
    super("SquareGameObject", [], "UI")
    this.addComponent(new Polygon(), {fillStyle: "red", points: Assets.square})
    this.addComponent(new SquareController())
    this.addComponent(new Collider())
    this.addComponent(new RigidBody(), {gravity: 80})
    this.transform.scale = new Vector2(20, 20)
    this.addComponent(new ClickController())
  }
}

/*
I'm still encountering the bug where, when using the mouse to create/transform position of an object, it is positively offset from the mouse. 
I went through my engine and copied & pasted the code where I thought I might've had a typo, but the issue is stil there.
So, I downloaded the class code on your Git, went into the platformer game, and added the click-create feature to the game to see if it was MY code
or if something was potentially wrong with the class code. The issue still persists in your code. I did not alter it outside of adding the 
click-create feature to test. So, either something is wrong with the class engine, or how I'm creating the object is causing an issue.

Right now I'm going through an older version of your code before aspect ratios to see if that was causing an issue.
*/