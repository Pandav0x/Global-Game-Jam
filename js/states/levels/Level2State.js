var LevelTwoState = function(){};
var touchPad;
console.log("LevelTwoState");
var touchPad;
LevelTwoState.prototype = {
	preload: function(){
		console.log("preload level2");
	},
	create: function(){
		console.log("create level2");

		game.phaser_game.stage.backgroundColor = "#4488AA";

		game.phaser_game.input.mouse.capture = true;

		// un objet avec en param (x,y) pour choisir son emplacement dans le monde
		var scaling = 0.15;// taille de tout les éléments
		
		var redBoat = new RedBoat(200,200);
		var redBoat2 = new RedBoat(400,400);
		var greenCorail = new GreenCorail(400,450);
		
		//Mettre le touchpad à x = 0, x = 500
		touchpad = new Touchpad(0,500);

	},
	update: function(){
		touchPad.update();
	},

	render: function(){
		game.phaser_game.debug.text("Left Button: " + game.phaser_game.input.activePointer.leftButton.isDown, 300, 132);
		//game.phaser_game.debug.text("Over: " + touchPad.input.pointerOver(), 32, 32);
	}
}