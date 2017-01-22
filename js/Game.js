var Game = function(){
    this.myId = 0;
    this.phaser_game;

    //Image path
    this.sprite_folder = "./assets/images/spritesheet/";
    this.texture_folder = "./assets/images/tile/";
    this.image_folder = "./assets/images/";
    this.buttons_folder = "./assets/images/buttons/";
    this.screens_folder = "./assets/images/screens/";

    //Sprite Path
    this.sprite_folder = "./assets/images/sprites/";

    //sound path
    this.ambiance_folder = "./assets/sounds/";

    //Next level (mise à jour à la fin d'un niveau)
    this.nextLevel = "Zero";

    //Finished levels
    this.finishedLevels = [false, false, false, false, false, false, false, false, false];
}

Game.prototype.init = function(){
    this.phaser_game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameCanvas');

    this.phaser_game.state.add("preloadState", PreloadState);
    this.phaser_game.state.add("ggjState", GGJState);
    this.phaser_game.state.add("storyState", StoryState);
    this.phaser_game.state.add("menuState", MenuState);
    this.phaser_game.state.add("gameState", GameState);
    this.phaser_game.state.add("winState", WinState);
    this.phaser_game.state.add("loseState", LoseState);
    this.phaser_game.state.add("creditState", CreditState);
    this.phaser_game.state.add("chooseState", ChooseState);
    this.phaser_game.state.add("levelOneTutorialState", LevelOneTutorialState);
    this.phaser_game.state.add("levelOneState", LevelOneState);
    this.phaser_game.state.add("levelTwoState", LevelTwoState);
    this.phaser_game.state.add("levelThreeState", LevelThreeState);
    this.phaser_game.state.add("levelFourState", LevelFourState);
    this.phaser_game.state.add("levelFiveState", LevelFiveState);
    this.phaser_game.state.add("levelSixState", LevelSixState);
    this.phaser_game.state.add("levelSevenState", LevelSevenState);
    this.phaser_game.state.add("levelEightState", LevelEightState);
    this.phaser_game.state.add("levelNineState", LevelNineState);
    this.phaser_game.state.start("preloadState");
}

var game = new Game();
game.init();
