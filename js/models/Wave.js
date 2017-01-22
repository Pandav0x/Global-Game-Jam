var Wave = function(x,y,spreading){

    this.x = x;
    this.y = y;
    this.spreading = spreading * 20;
    this.size = 30;
    this.scale = 0.5;
    this.circle = game.phaser_game.add.graphics(0,0);
    this.circle.lineStyle(3,0xFF0000,1);
    this.circle.drawCircle(this.x,this.y,this.size);
    this.circle.lifespan = 5000;

    game.phaser_game.physics.enable(this.circle,Phaser.Physics.ARCADE);
    //What is that shiiiiiit

    //this.circle.body.sprite.anchor.setTo(0.5,0.5);
    this.circle.body.velocity.x = this.spreading;
    this.circle.body.velocity.y = -500 + Math.pow(spreading, 2)/2;

    //this.circle.body.sprite.scale.x = this.scale;
    //this.circle.body.sprite.scale.y = this.scale;

    console.log("Wave Object");
}

Wave.prototype.growth = function(){

	//this.circle.destroy();
	//this.circle.drawCircle(this.x,this.y,this.size++);
	console.log("JE SUIS, MERLIN ARAN");
	//this.scaling += 0.2;
	//this.circle.body.sprite.scale.setTo(this.scale,this.scale);
	//this.circle.width = this.circle.width;
	//this.circle.height = this.circle.height + 2;
}
