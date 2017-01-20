var GameState = function(){};

console.log("GameState");

GameState.prototype = {
	preload: function(){
		console.log("preload Game");
	},
	create: function(){
		console.log("preload Game");

		Game.phaser_game.backgroundColor = "#4488AA";

		var rectangle = new Game.phaser_game.Rectangle(100,200,600,200);
	},
	update: function(){

	}

	render: function(){
		Game.phaser_game.debug(rectangle,'#0ffffff');
	}
}
