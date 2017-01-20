var GameState = function(){};

console.log("GameState");

GameState.prototype = {
	preload: function(){
		console.log("preload Game");
	},
	create: function(){
		console.log("preload Game");

		Game.phaser_game.backgroundColor = "#4488AA";
	},
	update: function(){

	}
}
