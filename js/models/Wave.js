var Wave = function(x,y){

    this.x = x;
    this.y = y;
    this.size = 0;
    this.circle = new Phaser.Circle(x,y,size);
}

Wave.prototype.update = function(){
	this.circle.setTo(this.x,this.y, this.size+2);
}