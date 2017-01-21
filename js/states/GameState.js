var GameState = function(){};
var touchPad;
console.log("GameState");
var touchPad;
GameState.prototype = {
	preload: function(){
		console.log("preload Game");
	},
	create: function(){
		console.log("create Game");

		game.phaser_game.stage.backgroundColor = "#4488AA";

		game.phaser_game.input.mouse.capture = true;

		// un objet avec en param (x,y) pour choisir son emplacement dans le monde
		var blueBoat = new BlueBoat(50,50);
		var redBoat = new RedBoat(100,50);
		var greenCorail = new GreenCorail(150,50);
		var pinkCorail = new PinkCorail(200,50);
		var mountain = new Mountain(250,50);
		var rockHouse = new RockHouse(300,50);
		var pilotiHouse = new PilotiHouse(350,50);

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