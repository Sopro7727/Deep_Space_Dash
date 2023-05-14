class Play extends Phaser.Scene{
    constructor(){
        super("playScene");
    }
    preload(){
        this.load.image('player', './assets/tempPlayer.png');
        this.load.image('platform', './assets/Platform.png');
        this.load.image('background', './assets/NewBackground.png');
        this.load.image('space', './assets/starfield_background.png');
    }
    create(){
        this.space = this.add.tileSprite(0,0,800,600,'space').setOrigin(0,0);
        this.background = this.add.tileSprite(0,0,800,400,'background').setOrigin(0,0);
        //PlayerProps
        player = this.physics.add.sprite(32, centerY, 'player').setOrigin(1);
        player.setCollideWorldBounds(true);
        player.setBounce(0);
        player.setImmovable();
        player.setMaxVelocity(0,500);
        player.setDragY(100);
        player.setDepth(1);
        player.destroyed = false;
        player.setBlendMode('SCREEN');
        player.onCollide = true;
        //this.enemy = new Enemy(this, 550, 400, 'player').setOrigin(0,0);
       
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        this.spawnTimer = 120;
    }
    update(){
        if(!player.destroyed){
            if(Phaser.Input.Keyboard.JustDown(keyUP)){
               //this.physics.gravity = {x: 0, y: -200}
            }
            if(Phaser.Input.Keyboard.JustDown(keyDOWN)){
                this.physics.arcade.setGravityY(200);
            }
        }
        this.spawnTimer -=1;
        if(this.spawnTimer <= 0){

        }
        this.physics.collide(player, this.platform, console.log('hit'))
        this.background.tilePositionX += 1;
        this.spawnTimer -= 1;
    }
}