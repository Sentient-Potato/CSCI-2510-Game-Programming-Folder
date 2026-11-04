class MainScene extends Scene{
  constructor(){
    super()
    this.instantiate(new SquareGameObject(), new Vector2(0,0), 0)
    this.instantiate(new PlatformGameObject(), new Vector2(0,50), 0)
    this.instantiate(new PlatformGameObject(), new Vector2(0, -200), 0)
    this.instantiate(new CoinGameObject(), new Vector2(-100, 0), 45)
    this.instantiate(new CoinGameObject(), new Vector2(0, -90), 45)
  }
}
