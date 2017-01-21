var LevelEightState = function(){};

console.log("LevelEightState");

LevelEightState.prototype = {
	preload: function(){
		console.log("preload level8");
	},
	create: function(){
		console.log("create level8");

		game.phaser_game.stage.backgroundColor = "#4488AA";

		game.phaser_game.input.mouse.capture = true;

		touchPad = new TouchPad(0,500);
	},
	update: function(){
		touchPad.update();
	}
}