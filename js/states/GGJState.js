var GGJState = function(){};

console.log("GGJState");

GGJState.prototype = {
	preload: function(){
		console.log("preload ggj");
	},
	create: function(){

		game.phaser_game.stage.backgroundColor = "#4488AA";
		game.phaser_game.add.tileSprite(240, 150, 315, 315, 'ggjlogo');
		window.setTimeout(nextTimerGGJ, 3000);
		
		console.log("create ggj");
	},
	update: function(){}
}

function nextTimerGGJ () {

    game.phaser_game.state.start("creditsState");
}
