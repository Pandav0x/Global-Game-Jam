var WinState = function(){};

console.log("WinState");

WinState.prototype = {
	preload: function(){
		console.log("preload win");
	},
	create: function(){

		game.phaser_game.stage.backgroundColor = "#4488AA";
		game.phaser_game.add.tileSprite(220, 150, 339, 240, 'winVictory');
		game.phaser_game.add.tileSprite(172, 20, 435, 83, 'congrat');

		buttonMenu = game.phaser_game.add.button(20, 420, 'buttonMenu', actionOnClickMenu, this, 2, 1, 0);

		if(game.nextLevel != "None"){ //On n'affiche pas le bouton suivant si on vient de finir le niveau 9
			buttonNext = game.phaser_game.add.button(630, 420, 'buttonNext', actionOnClickNext, this, 2, 1, 0);
		}

		console.log("create win");
	},
	update: function(){}
}

function actionOnClickMenu () {

    game.phaser_game.state.start("chooseState");
}

function actionOnClickNext () {
    game.phaser_game.state.start("level"+game.nextLevel+"State");
}