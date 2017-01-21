var Level2State = function(){};

console.log("Level2State");

Level1State.prototype = {
	preload: function(){
		console.log("preload level2");
	},
	create: function(){
		console.log("create level2");


		// un objet avec en param (x,y) pour choisir son emplacement dans le monde
		var blueBoat = new BlueBoat(50,50);
		var redBoat = new RedBoat(100,50);
		var greenCorail = new GreenCorail(150,50);
		var redCorail = new RedCorail(200,50);
		var mountain = new Mountain(250,50);
		var rockHouse = new rockHouse(300,50);
		var pilotiHouse = new PilotiHouse(350,50);

		//Mettre le touchpad à x = 0, x = 500
		var touchpad = new Touchpad(0,500);

	},
	update: function(){}
}