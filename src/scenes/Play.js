class Play extends Phaser.Scene{
    constructor(){
        super("playScene");
    }
    preload(){
        this.load.image('player', './assets/tempPlayer.png');
    }
    create(){
       //this.player = new Player(this, 150, 400, 'player').setOrigin(0,0);
       this.enemy = new Enemy(this, 150, 400, 'player').setOrigin(0,0);
    }
}