var TouchPad = function(x,y){

    this.x = x;
    this.y = y;
    this.sprite = game.phaser_game.add.sprite(x,y,'touchpad');
    this.sprite.inputEnabled = true;

    this.fireRate = 500;
    this.nextFire = 0; // shoot da wave

    this.waveStrength = 0;

    console.log("Create TouchPad");
}

TouchPad.prototype.update = function(){
        
    if (game.phaser_game.time.now > this.nextFire)
    {
        if(this.sprite.input.pointerOver() && game.phaser_game.input.activePointer.leftButton.isDown){
            this.waveStrength++;

            console.log("down vague");
        
            if(this.waveStrength <= 500)
                this.waveStrength = 500;

            this.nextFire = game.phaser_game.time.now + this.fireRate;       
        }
    }
}