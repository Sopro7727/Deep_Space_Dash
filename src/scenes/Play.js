class Play extends Phaser.Scene{
    constructor(){
        super("playScene");
    }
    preload(){
        this.load.image('player', './assets/tempPlayer.png');
        this.load.image('platform', './assets/Platform.png');
        this.load.image('background', './assets/NewBackground.png');
        this.load.image('space', './assets/starfield_background.png');
        this.load.image('laser', './assets/laser.png');
    }
    create(){
        launch = this.sound.add('launch', {volume: 0.5});
        shot = this.sound.add('laserShot', {volume: 0.5});
        death = this.sound.add('boom', {volume: 0.5});
        launch.play();
        this.laserSpeed = this.game.settings.gameSpeed * -100;
        this.space = this.add.tileSprite(0,0,800,600,'space').setOrigin(0,0);
        this.background = this.add.tileSprite(0,0,800,400,'background').setOrigin(0,0);
        //PlayerProps
        player = this.physics.add.sprite(80, centerY, 'player').setOrigin(0,0);
        {
            player.setCollideWorldBounds(true);
            player.setBounce(0.5);
            player.setImmovable();
            player.setMaxVelocity(0,500);
            player.setDragY(100);
            player.setDepth(1);
            player.destroyed = false;
            player.setBlendMode('SCREEN');
            player.onCollide = true;
        }
        //LaserProps
        this.laserGroup = this.add.group({
            runChildUpdate: true
        });
        //this.enemy = new Enemy(this, 550, 400, 'player').setOrigin(0,0);
        this.physics.world.on('overlap', (player, laser, body1, body2)=>{player.destroyed = true;});
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        this.spawnTimer = initSpawnTime;
        };
        // this.game.config.width, Phaser.Math.Between(30, 370), 'laser').setOrigin(0,0)
    
    update(){
        if(!backgroundMusic.isPlaying){
            backgroundMusic.play();
        }
        if(!player.destroyed){
            if(Phaser.Input.Keyboard.JustDown(keyUP)){
               player.body.setGravityY(-1000);
            }
            if(Phaser.Input.Keyboard.JustDown(keyDOWN)){
                player.body.setGravityY(1000);
            }
        }
        this.spawnTimer -=1;
        if(this.spawnTimer <= 0){
            counter +=1;
            survivalTime +=1;
            if(counter %5 == 0){
                if(initSpawnTime > 120){
                    initSpawnTime -= 60;
                }
                this.game.settings.gameSpeed +=1;
            }
            this.spawnLaser();
            //this.laserGroup.add(laser);
            this.spawnTimer = initSpawnTime;
        }
        this.physics.world.collide(player, this.laserGroup, this.playerCollision, null, this);
        this.background.tilePositionX += 1;
        this.space.tilePositionX +=3;
        this.spawnTimer -= 1;
    }
    spawnLaser(){
        laser = this.physics.add.sprite(game.config.width + laserWidth, Phaser.Math.Between(laserHeight/2, game.config.height - laserHeight/2),'laser').setOrigin(0,0);
        {
            laser.setVelocityX(this.laserSpeed);
            laser.setImmovable();
        }
        shot.play();
        this.laserGroup.add(laser);
    }
    playerCollision(){
        player.destroyed = true;
        death.play();
        player.destroy();
        this.time.delayedCall(1000, () => {
            this.laserGroup.setVelocityX(0)});
        this.time.delayedCall(750, () => {this.scene.start('endScene')});
    }
}