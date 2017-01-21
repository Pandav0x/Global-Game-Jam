var ChooseState = function(){};

console.log("ChooseState");

ChooseState.prototype = {
	preload: function(){
		console.log("preload Choose");
	},
	create: function(){
		console.log("create Choose");

		game.phaser_game.stage.backgroundColor = '#182d3b';

	    buttonLevel1 = game.phaser_game.add.button(20, 20, 'buttonLevel1', actionOnClickLevel1, this, 2, 1, 0);
	    buttonLevel2 = game.phaser_game.add.button(20, 220, 'buttonLevel2', actionOnClickLevel2, this, 2, 1, 0);
	    buttonLevel3 = game.phaser_game.add.button(20, 420, 'buttonLevel3', actionOnClickLevel3, this, 2, 1, 0);
	    buttonLevel4 = game.phaser_game.add.button(200, 20, 'buttonLevel4', actionOnClickLevel4, this, 2, 1, 0);
	    buttonLevel5 = game.phaser_game.add.button(200, 220, 'buttonLevel5', actionOnClickLevel5, this, 2, 1, 0);
	    buttonLevel6 = game.phaser_game.add.button(200, 420, 'buttonLevel6', actionOnClickLevel6, this, 2, 1, 0);
	    buttonLevel7 = game.phaser_game.add.button(400, 20, 'buttonLevel7', actionOnClickLevel7, this, 2, 1, 0);
	    buttonLevel8 = game.phaser_game.add.button(400, 220, 'buttonLevel8', actionOnClickLevel8, this, 2, 1, 0);
	    buttonLevel9 = game.phaser_game.add.button(400, 420, 'buttonLevel9', actionOnClickLevel9, this, 2, 1, 0);
	},

	update: function(){
		
	}
	
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

function actionOnClickLevel6 () {

    game.phaser_game.state.start("levelSixState");
}

function actionOnClickLevel7 () {

    game.phaser_game.state.start("levelSevenState");
}

function actionOnClickLevel8 () {

    game.phaser_game.state.start("levelEightState");
}
function actionOnClickLevel9 () {

    game.phaser_game.state.start("levelNineState");
}


