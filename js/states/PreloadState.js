var PreloadState = function(){};

console.log("PreloadState");

PreloadState.prototype = {
	preload: function(){
		console.log("preload preload");
		game.phaser_game.physics.startSystem(Phaser.Physics.ARCADE);

		game.phaser_game.load.image('blueBoat', game.sprite_folder + 'BlueBoat.png');
		game.phaser_game.load.image('redBoat', game.sprite_folder + 'RedBoat.png');
		game.phaser_game.load.image('greenCorail', game.sprite_folder + 'GreenCorail.png');
		game.phaser_game.load.image('pinkCorail', game.sprite_folder + 'PinkCorail.png');
		game.phaser_game.load.image('pilotiHouse', game.sprite_folder + 'PilotiHouse.png');
		game.phaser_game.load.image('rockHouse', game.sprite_folder + 'RockHouse.png');
		game.phaser_game.load.image('mountain', game.sprite_folder + 'Mountain.png');
		game.phaser_game.load.image('touchpad', game.sprite_folder + 'TouchPad.png');
		game.phaser_game.load.image('menu', game.sprite_folder + "Choose.png");
		game.phaser_game.load.image('winVictory', game.sprite_folder + "WinVictory.png");
		game.phaser_game.load.image('laurier', game.sprite_folder + "laurier.png");
		game.phaser_game.load.image('congrat', game.sprite_folder + "Congrat.png");
		game.phaser_game.load.image('ggjlogo', game.sprite_folder + "GGJLogo.png");
		game.phaser_game.load.image('story', game.sprite_folder + "Story.png");
		game.phaser_game.load.image('tuto', game.sprite_folder + "Tuto.png");

		game.phaser_game.load.atlasJSONHash('buttonPlay', game.sprite_folder+'button.png', game.sprite_folder+'button.json');
		game.phaser_game.load.atlasJSONHash('buttonChoose', game.sprite_folder+'buttonPlay.png', game.sprite_folder+'buttonPlay.json');
		game.phaser_game.load.atlasJSONHash('buttonNext', game.sprite_folder+'NextButton.png', game.sprite_folder+'NextButton.json');
		game.phaser_game.load.atlasJSONHash('buttonMenu', game.sprite_folder+'MenuButton.png', game.sprite_folder+'MenuButton.json');

	},
	create: function(){
		console.log("create preload");
		game.phaser_game.state.start("ggjState");
	},
	update: function(){}
}
