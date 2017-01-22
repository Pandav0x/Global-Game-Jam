var RedBoat = function(x,y,scaling){

    this.x = x;
    this.y = y;
    this.scaling = scaling;
    this.sprite = game.phaser_game.add.sprite(x,y,'redBoat');

    this.sprite.scale.setTo(this.scaling,this.scaling);
	
	var destroy = false;
}