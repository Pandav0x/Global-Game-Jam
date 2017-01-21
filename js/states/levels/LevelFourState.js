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
	},
	update: function(){
		touchPad.update();
	}
}