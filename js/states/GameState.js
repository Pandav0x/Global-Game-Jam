var GameState = function(){};
var touchPad;
console.log("GameState");
var touchPad;
GameState.prototype = {
	preload: function(){
		console.log("preload Game");
	},
	create: function(){
		console.log("create Game");

		game.phaser_game.stage.backgroundColor = "#4488AA";

		game.phaser_game.input.mouse.capture = true;

		touchPad = new TouchPad(0,500);

		
	},
	update: function(){
		touchPad.update();


	},

	render: function(){
		game.phaser_game.debug.text("Left Button: " + game.phaser_game.input.activePointer.leftButton.isDown, 300, 132);
		//game.phaser_game.debug.text("Over: " + touchPad.input.pointerOver(), 32, 32);
	}
}