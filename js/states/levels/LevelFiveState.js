var LevelFiveState = function(){};

console.log("LevelFiveState");

LevelFiveState.prototype = {
	preload: function(){
		console.log("preload level5");
	},
	create: function(){
		console.log("create level5");

		game.phaser_game.stage.backgroundColor = "#4488AA";

		game.phaser_game.input.mouse.capture = true;

		touchPad = new TouchPad(0,500);
	},
	update: function(){
		touchPad.update();
	}
}