var LevelFourState = function(){};

console.log("LevelFourState");

LevelFourState.prototype = {
	preload: function(){
		console.log("preload level4");
	},
	create: function(){
		console.log("create level4");

		game.phaser_game.stage.backgroundColor = "#4488AA";

		game.phaser_game.input.mouse.capture = true;

		touchPad = new TouchPad(0,500);

		var scaling = 0.15;
		var rockHouse = new RockHouse(370,180,scaling);
		var redBoat = new RedBoat(250,250,scaling);
		var redBoat = new RedBoat(450,250,scaling);
		
		arrow = game.phaser_game.add.button(10, 464, 'arrow', listener, this, 2, 1, 0);
		arrow.scale.setTo(0.05,0.15);
	},
	update: function(){
		touchPad.update();
	},

	render: function(){
		game.phaser_game.debug.text("Left Button: " + game.phaser_game.input.activePointer.leftButton.isDown, 300, 132);
		//game.phaser_game.debug.text("Over: " + touchPad.input.pointerOver(), 32, 32);
	}
}