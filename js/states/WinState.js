var WinState = function(){};

console.log("WinState");

WinState.prototype = {
	preload: function(){
		console.log("preload win");
	},
	create: function(){

		text = game.phaser_game.add.text(400,200, "Win!");

		buttonChoose = game.phaser_game.add.button(20, 420, 'buttonChoose', actionOnClickChoose, this, 2, 1, 0);

		if(game.nextLevel != "None"){ //On n'affiche pas le bouton suivant si on vient de finir le niveau 9
			buttonNext = game.phaser_game.add.button(400, 420, 'buttonNext', actionOnClickNext, this, 2, 1, 0);
		}

		console.log("create win");
	},
	update: function(){}
}

function actionOnClickChoose () {

    game.phaser_game.state.start("chooseState");
}

function actionOnClickNext () {
    game.phaser_game.state.start("level"+game.nextLevel+"State");
}