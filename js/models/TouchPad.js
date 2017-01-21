var TouchPad = function(x,y){
    this.x = x;
    this.y = y;
    this.sprite = game.phaser_game.add.sprite(x,y,'touchpad');
    this.sprite.inputEnabled = true;

    this.fireRate = 500;
    this.nextFire = 0; // shoot da wave

    this.mouseX;
    this.mouseY;
    this.waveArrays = [];

    this.back = 0; // variable used to count circles and erases them

    this.waveStrength = 0;

    console.log("Create TouchPad");
}

TouchPad.prototype.update = function(){

    this.mouseX = game.phaser_game.input.activePointer.x;
    this.mouseY = game.phaser_game.input.activePointer.y;

    if (game.phaser_game.time.now > this.nextFire)
    {
        if(this.sprite.input.pointerOver() && game.phaser_game.input.activePointer.leftButton.isDown)
        {
            this.waveStrength++;

            if(this.waveStrength <= 500)
                this.waveStrength = 500;

            var wave = new Wave(this.mouseX,this.mouseY);

            this.waveArrays[this.back] = wave;
            this.back += 1;

            console.log("Wave Down");

            //wave intensity
              var lastduration = 0;
              game.phaser_game.input.onUp.add(function(pointer){
                 lastDuration = pointer.duration;
              }, this);
              this.waveStrength = game.phaser_game.input.activePointer.duration;
              console.log(this.waveStrength);
            //end

            this.nextFire = game.phaser_game.time.now + this.fireRate;
        }
    }

    if(this.back >= 10){
        this.back = 0;
    }

    /*for (var i = 0; i <= this.back; i++){
        if(this.waveArrays.length > 0){
            console.log("Vague :" + this.waveArrays[i]);
            this.waveArrays[i].growth();
        }
    }*/
}
