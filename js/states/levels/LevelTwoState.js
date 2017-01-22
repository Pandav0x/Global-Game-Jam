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

		// un objet avec en param (x,y,scaling) pour choisir son emplacement dans le monde et sa taille dans le 3ème champ
		var scaling = 0.15;// taille de tout les éléments

		var redBoat = new RedBoat(200,200,scaling);
		var redBoat = new RedBoat(500,250,scaling);
		var greenCorail = new GreenCorail(480,300,scaling);

		//Mettre le touchpad à x = 0, x = 500
		touchPad = new TouchPad(0,500);
		
		arrow = game.phaser_game.add.button(10, 464, 'arrow', listener, this, 2, 1, 0);
		arrow.scale.setTo(0.05,0.15);

		this.bgMusic = game.phaser_game.add.audio('musicMain');
		this.jingle = game.phaser_game.add.audio('jingleWin');
		this.bgMusic.loop = true;
		this.bgMusic.play();
	},
	update: function(){
		touchPad.update();
	},

	render: function(){
		game.phaser_game.debug.text("Left Button: " + game.phaser_game.input.activePointer.leftButton.isDown, 300, 132);
		//game.phaser_game.debug.text("Over: " + touchPad.input.pointerOver(), 32, 32);
	}
}