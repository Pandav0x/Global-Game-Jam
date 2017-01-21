var Level1State = function(){};

console.log("Level1State");

Level1State.prototype = {
	preload: function(){
		console.log("preload level1");
		game.phaser_game.physics.startSystem(Phaser.Physics.ARCADE);
	},
	create: function(){
		console.log("create level1");
	},
	update: function(){}
}