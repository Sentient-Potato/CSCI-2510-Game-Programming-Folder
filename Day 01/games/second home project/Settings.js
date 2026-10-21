class Settings {
    static layers = ["background", "lasers", "enemyships", "playership", "boss", "UI", "menu"]
/*
    background: Background objects that are visual and have no impact on gameplay
    lasers: The lasers being shot. Should be under everything
    enemyship: The minions the boss spawns in
    playership: The player
    boss: The boss object. Should be on top, here in case I code a "boss charge/rush" attack
    UI: The health, points, inventory slot, the GUI that are ON SCREEN but not IN THE GAME itself. Does not include menu screens
    menu: The menu screens. Mostly for the pause menu.
*/
}