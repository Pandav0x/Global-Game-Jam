var LevelThreeState = function(){};

console.log("LevelThreeState");

LevelThreeState.prototype = {
	preload: function(){
		console.log("preload level3");
	},
	create: function(){
		console.log("create level3");

		game.phaser_game.stage.backgroundColor = "#4488AA";

		game.phaser_game.input.mouse.capture = true;

		touchPad = new TouchPad(0,500);

		var scaling = 0.15;
		var rockHouse = new RockHouse(600,100,scaling);
		var blueBoat = new BlueBoat(50,100,scaling);
		var redBoat = new RedBoat(350,300,scaling);
		scaling = 0.3;
		var mountain = new Mountain(340,350,scaling);
	},
	update: function(){
		touchPad.update();
	},

	render: function(){
		game.phaser_game.debug.text("Left Button: " + game.phaser_game.input.activePointer.leftButton.isDown, 300, 132);
		//game.phaser_game.debug.text("Over: " + touchPad.input.pointerOver(), 32, 32);
	}
}