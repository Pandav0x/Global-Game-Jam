var Wave = function(x,y){

    this.x = x;
    this.y = y;
    this.size = 64;
    this.circle = game.phaser_game.add.graphics(0,0);
    this.circle.beginFill(0xFF0000,1);
    this.circle.drawCircle(this.x,this.y,this.size);
    this.circle.lifespan = 5000;
}

Wave.prototype.growth = function(){
	this.circle.drawCircle(this.x,this.y, this.size+2);
}