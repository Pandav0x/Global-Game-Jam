var LevelNineState = function(){};

console.log("LevelNineState");

LevelNineState.prototype = {
	preload: function(){
		console.log("preload level9");
	},
	create: function(){
		console.log("create level9");

		game.phaser_game.stage.backgroundColor = "#4488AA";

		game.phaser_game.input.mouse.capture = true;

		touchPad = new TouchPad(0,500);

		var scaling = 0.15;
		var rockHouse = new RockHouse(100,50,scaling);
		var redBoat = new RedBoat(100,100,scaling);
		var redBoat = new RedBoat(550,100,scaling);
		var redBoat = new RedBoat(600,250,scaling);
		var blueBoat = new BlueBoat(600,350,scaling);

		scaling = 0.3;
		var mountain = new Mountain(580,400,scaling);

		scaling = 0.1;
		var pinkCorail = new PinkCorail(550,150,scaling);
		
		arrow = game.phaser_game.add.button(10, 464, 'arrow', listener, this, 2, 1, 0);
		arrow.scale.setTo(0.05,0.15);

		this.bgMusic = game.phaser_game.add.audio('musicMain');
		this.jingle = game.phaser_game.add.audio('jingleWin');
		this.bgMusic.loop = true;
		this.bgMusic.play();
	},
	update: function(){
		touchPad.update();
	}
}