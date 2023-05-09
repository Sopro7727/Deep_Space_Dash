class Play extends Phaser.Scene{
    constructor(){
        super("playScene");
    }
    preload(){
        this.load.image('player', './assets/tempPlayer.png');
    }
    create(){
       this.player = new Player(this, 150, 400, 'player').setOrigin(0,0);
       this.enemy = new Enemy(this, 550, 400, 'player').setOrigin(0,0);
       keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
       keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
       spawnTimer = 100;
    }
    update(){
        spawnTimer -= 1;
        
        this.player.update();

    }
}