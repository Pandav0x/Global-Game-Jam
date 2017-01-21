var GameState = function(){};
var touchPad;
console.log("GameState");
GameState.prototype = {
	preload: function(){
		console.log("preload Game");
	},
	create: function(){
		console.log("create Game");

		game.phaser_game.stage.backgroundColor = "#4488AA";

		game.phaser_game.input.mouse.capture = true;

		// un objet avec en param (x,y,scaling) pour choisir son emplacement dans le monde et sa taille dans le 3ème champ

		var scaling = 0.15;// taille de tout les éléments
		var blueBoat = new BlueBoat(50,50,scaling);
		var redBoat = new RedBoat(100,150,scaling);
		var rockHouse = new RockHouse(300,50,scaling);

		/*var greenCorail = new GreenCorail(150,50,scaling);
		var pinkCorail = new PinkCorail(200,50,scaling);
		var mountain = new Mountain(250,50,scaling);
		var pilotiHouse = new PilotiHouse(350,50,scaling);*/

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