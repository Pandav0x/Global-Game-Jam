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
	},
	update: function(){
		touchPad.update();
	}
}