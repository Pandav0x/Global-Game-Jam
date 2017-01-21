var LevelOneState = function(){};
var touchPad;
console.log("LevelOneState");
var touchPad;
LevelOneState.prototype = {
	preload: function(){
		console.log("preload level1");
	},
	create: function(){
		console.log("create level1");

		game.phaser_game.stage.backgroundColor = "#4488AA";

		game.phaser_game.input.mouse.capture = true;

		// un objet avec en param (x,y,scaling) pour choisir son emplacement dans le monde et sa taille dans le 3ème champ
		var scaling = 0.15;// taille de tout les éléments

		var redBoat = new RedBoat(200,300,scaling);
		var rockHouse = new RockHouse(500,200,scaling);

		//Mettre le touchpad à x = 0, x = 500
		touchPad = new TouchPad(0,500);

		
	},
	update: function(){
		touchPad.update();
	},

	render: function(){
		game.phaser_game.debug.text("Left Button: " + game.phaser_game.input.activePointer.leftButton.isDown, 300, 132);
		//game.phaser_game.debug.text("Over: " + touchPad.input.pointerOver(), 32, 32);
	}
}