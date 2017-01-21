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
	},
	create: function(){
		console.log("create preload");
		game.phaser_game.state.start("levelTwoState");
	},
	update: function(){}
}
