var Wave = function(x,y){

    this.x = x;
    this.y = y;
    this.size = 0;
    this.circle = game.phaser_game.add.graphics(0,0);
    this.circle.beginFill(0xFF0000,1);
    this.circle.drawCircle(this.x,this.y,this.size);
    this.circle.lifespan = 5000;
}

Wave.prototype.growth = function(){
	this.circle.beginFill(0xFF0000,1);
	//this.circle.width = this.circle.width;
	this.circle.height = this.circle.height + 2;

	console.log("Size shit :" + this.circle.width);
	console.log("Size height :" + this.circle.height);  
}
