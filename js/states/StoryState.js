var StoryState = function(){};

console.log("StoryState");

StoryState.prototype = {
	preload: function(){
		console.log("preload story");
	},
	create: function(){

		game.phaser_game.add.tileSprite(0, 0, 800, 600, 'story');
		buttonNext = game.phaser_game.add.button(330, 500, 'buttonNext', actionOnClickNextStory, this, 2, 1, 0);
		
		console.log("create story");
	},
	update: function(){}
}

function actionOnClickNextStory () {
    game.phaser_game.state.start("chooseState");
}