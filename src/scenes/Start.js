class Start extends Phaser.Scene{
    constructor(){
        super('startScene');
    }
    preload(){
        this.load.audio('boom', './assets/Explosion.mp3');
        this.load.audio('laserShot', './assets/LaserShot.mp3');
        this.load.audio('launch', './assets/StartupLaunch.mp3');
        this.load.audio('backgroundM', './assets/RandomPianoStuff.wav');
    }
    create(){
        let menuConfig = {
            fontFamily: 'Courier', 
            fontSize: '28px', 
            backgroundColor: '#F3B141', 
            color: '#843605', 
            align: 'Center', 
            padding: {top: 5, bottom: 5,left: 5, right: 5}, 
            fixedWidth: 0
        }
        backgroundMusic = this.sound.add('backgroundM', {volume: 0.5});
        backgroundMusic.play();
        console.log('running');
        this.add.text(game.config.width/2 - 100,game.config.height/2 - 100, "Endless Runner", menuConfig);
        this.add.text(game.config.width/2, game.config.height/2, "Use ↑↓ arrows to move\n\nPress Enter to Begin ", menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, "Press ← for Novice or → for Expert", menuConfig).setOrigin(0.5);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    }
    update(){
        if(!backgroundMusic.isPlaying){
            backgroundMusic.play();
        }
        if(Phaser.Input.Keyboard.JustDown(keyENTER)){
            this.game.settings = {
                gameSpeed: 4,
            }
            this.scene.start('playScene');
        }
    }
}