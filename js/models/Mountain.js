var Mountain = function(x,y){

    this.x = x;
    this.y = y;
    this.sprite = game.phaser_game.add.sprite(x,y,'mountain');
}