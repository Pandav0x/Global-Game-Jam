var LevelOneState = function(){};

console.log("LevelOneState");

LevelOneState.prototype = {
	preload: function(){
		console.log("preload level1");
	},
	create: function(){
		console.log("create level1");

		game.phaser_game.stage.backgroundColor = "#4488AA";

		game.phaser_game.input.mouse.capture = true;

		touchPad = new TouchPad(0,500);
	},
	update: function(){}
}