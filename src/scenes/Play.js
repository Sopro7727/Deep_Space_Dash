class Play extends Phaser.Scene{
    constructor(){
        super("playScene");
    }
    preload(){
        this.load.image('player', './assets/tempPlayer.png');
        this.load.image('platform', './assets/Platform.png');
        this.load.image('background', './assets/Background.png');
    }
    create(){
        this.background = this.add.tileSprite(0,0,800,800,'background').setOrigin(0,0);
        this.player = new Player(this, 150, 400, 'player').setOrigin(0,0);
        this.enemy = new Enemy(this, 550, 400, 'player').setOrigin(0,0);
       
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        this.topNet = this.add.image(centerX, 100, 'platform').setOrigin(0.5, 0);
        // create the compound bodies
        this.topNetBack = this.physics.add.image(centerX, 108);         // back of net
        this.topNetBack.setSize(800, 16);
        this.topNetBack.setDebugBodyColor(0x0000FF);
        this.topNetBack.setImmovable(true);
        this.topNetBack.onCollide = true;     
        // add the compound bodies to a group
        this.spawnTimer = 100;
        }
    update(){
        this.spawnTimer -= 1;
        this.player.update();
    }
}