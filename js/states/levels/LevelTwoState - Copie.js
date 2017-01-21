var LevelTwoState = function(){};

console.log("LevelTwoState");

LevelTwoState.prototype = {
	preload: function(){
		console.log("preload level2");
	},
	create: function(){
		console.log("create level2");

		game.phaser_game.stage.backgroundColor = "#4488AA";

		game.phaser_game.input.mouse.capture = true;

		touchPad = new TouchPad(0,500);
	},
	update: function(){
		touchPad.update();
	}
}