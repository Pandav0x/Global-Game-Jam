var CreditsState = function(){};

console.log("CreditsState");

CreditsState.prototype = {
	preload: function(){
		console.log("preload credits");
	},
	create: function(){

		game.phaser_game.add.tileSprite(0, 0, 800, 600, 'credits');
		window.setTimeout(nextTimerCredits, 1500);
		
		console.log("create credits");
	},
	update: function(){}
}

function nextTimerCredits () {

    game.phaser_game.state.start("storyState");
}
