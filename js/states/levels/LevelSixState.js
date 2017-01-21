var LevelSixState = function(){};

console.log("LevelSixState");

LevelSixState.prototype = {
	preload: function(){
		console.log("preload level6");
	},
	create: function(){
		console.log("create level6");

		game.phaser_game.stage.backgroundColor = "#4488AA";

		game.phaser_game.input.mouse.capture = true;

		var scaling=0.15;
		var redBoat = new RedBoat(50,50,scaling);
		var redBoat = new RedBoat(600,100,scaling);

		scaling = 0.3;
		var pilotiHouse = new PilotiHouse(50,350,scaling);
		var mountain = new Mountain(200,200,scaling);
		var mountain = new Mountain(450,250,scaling);

		scaling = 0.1;
		var greenCorail = new GreenCorail(500,50,scaling);
		var greenCorail = new GreenCorail(700,350,scaling);
		var pinkCorail = new PinkCorail(100,300,scaling);

		touchPad = new TouchPad(0,500);
	},
	update: function(){
		touchPad.update();
	}
}