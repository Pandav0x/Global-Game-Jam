var LevelSevenState = function(){};

console.log("LevelSevenState");

LevelSevenState.prototype = {
	preload: function(){
		console.log("preload level7");
	},
	create: function(){
		console.log("create level7");

		game.phaser_game.stage.backgroundColor = "#4488AA";

		game.phaser_game.input.mouse.capture = true;

		touchPad = new TouchPad(0,500);

		var scaling = 0.15;

		var rockHouse = new RockHouse(50,100,scaling);
		var blueBoat = new BlueBoat(450,250,scaling);
		var redBoat = new RedBoat(50,250,scaling);

		scaling = 0.1;
		var greenCorail = new GreenCorail(450,300,scaling);
		var greenCorail = new GreenCorail(50,300,scaling);

		
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