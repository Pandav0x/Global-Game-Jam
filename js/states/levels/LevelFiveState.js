var LevelFiveState = function(){};

console.log("LevelFiveState");

LevelFiveState.prototype = {
	preload: function(){
		console.log("preload level5");
	},
	create: function(){
		console.log("create level5");

		game.phaser_game.stage.backgroundColor = "#4488AA";

		game.phaser_game.input.mouse.capture = true;

		touchPad = new TouchPad(0,500);

		var scaling = 0.15;
		var blueBoat = new BlueBoat(150,50,scaling);
		var blueBoat = new BlueBoat(50,300,scaling);
		scaling = 0.3;
		var pilotiHouse = new PilotiHouse(350,200, scaling);
		var mountain = new Mountain(30,350, scaling);
		
		arrow = game.phaser_game.add.button(10, 464, 'arrow', listener, this, 2, 1, 0);
		arrow.scale.setTo(0.05,0.15);
//commentaire

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