var PreloadState = function(){};

console.log("PreloadState");

PreloadState.prototype = {
	preload: function(){
		console.log("preload preload");
		game.phaser_game.physics.startSystem(Phaser.Physics.ARCADE);
	},
	create: function(){
		console.log("create preload");
		game.phaser_game.state.start("gameState");
	},
	update: function(){}
}
