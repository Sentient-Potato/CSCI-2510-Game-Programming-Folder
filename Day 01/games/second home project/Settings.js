class Settings {
    static layers = ["background", "lasers", "power-ups", "ships", "boss", "UI", "menu"]
    static collisionLayers = [["lasers", "ships"], ["lasers", "boss"], ["power-ups", "ships"]]
    static aspectRatio = 16/9
    static cameraWidthInWorldSpace = 1250

/*
    background: Background objects that are visual and have no impact on gameplay
    lasers: The lasers being shot. Should be under everything
    enemyship: The minions the boss spawns in
    playership: The player
    boss: The boss object. Should be on top, here in case I code a "boss charge/rush" attack
    UI: The health, points, inventory slot, the GUI that are ON SCREEN but not IN THE GAME itself. Does not include menu screens
    menu: The menu screens. Mostly for the pause menu.


    class Settings{
    static layers = ["background", "midground", "foreground", "default", "UI"]
    // static aspectRatio = 9/16
    // static cameraWidthInWorldSpace = 262
    static collisionLayers = [["default", "foreground"]]
}

*/
}