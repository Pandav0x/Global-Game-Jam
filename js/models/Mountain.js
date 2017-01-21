var Mountain = function(x,y, scaling){

    this.x = x;
    this.y = y;
    this.scaling = scaling;
    this.sprite = game.phaser_game.add.sprite(x,y,'mountain');

    this.sprite.scale.setTo(this.scaling,this.scaling);
}