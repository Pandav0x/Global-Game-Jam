var ChooseState = function(){};

console.log("ChooseState");

ChooseState.prototype = {
	preload: function(){
		console.log("preload Choose");
	},
	create: function(){
		console.log("create Choose");

		game.phaser_game.stage.backgroundColor = '#182d3b';

		buttonGameState = game.phaser_game.add.button(400, 20, 'buttonGame', actionOnClickGame, this, 2, 1, 0);
	    buttonLevel1 = game.phaser_game.add.button(20, 20, 'buttonLevel1', actionOnClickLevel1, this, 2, 1, 0);
	    buttonLevel2 = game.phaser_game.add.button(20, 220, 'buttonLevel2', actionOnClickLevel2, this, 2, 1, 0);
	    buttonLevel3 = game.phaser_game.add.button(20, 420, 'buttonLevel3', actionOnClickLevel3, this, 2, 1, 0);
	    buttonLevel4 = game.phaser_game.add.button(400, 220, 'buttonLevel4', actionOnClickLevel4, this, 2, 1, 0);
	    buttonLevel5 = game.phaser_game.add.button(400, 420, 'buttonLevel5', actionOnClickLevel5, this, 2, 1, 0);
	},

	update: function(){}
	
}
function actionOnClickGame () {

    game.phaser_game.state.start("gameState");
}

function actionOnClickLevel1 () {

    game.phaser_game.state.start("levelOneState");
}

function actionOnClickLevel2 () {

    game.phaser_game.state.start("levelTwoState");
}

function actionOnClickLevel3 () {

    game.phaser_game.state.start("levelThreeState");
}

function actionOnClickLevel4 () {

    game.phaser_game.state.start("levelFourState");
}

function actionOnClickLevel5 () {

    game.phaser_game.state.start("levelFiveState");
}


