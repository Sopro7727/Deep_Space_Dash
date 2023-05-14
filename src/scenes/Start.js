class Start extends Phaser.Scene{
    constructor(){
        super('startScene');
    }
    preload(){
    }
    create(){
        let menuConfig = {
            fontFamily: 'Courier', 
            fontSize: '28px', 
            backgroundColor: '#F3B141', 
            color: '#843605', 
            align: 'right', 
            padding: {top: 5, bottom: 5,}, 
            fixedWidth: 0
            
        }
        console.log('running');
        this.add.text(game.config.width/2 - 100,game.config.height/2 - 100, "Endless Runner", menuConfig);
        this.add.text(game.config.width/2, game.config.height/2, "Use ↑↓ arrows to move", menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, "Press ← for Novice or → for Expert", menuConfig).setOrigin(0.5);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    }
    update(){
        if(Phaser.Input.Keyboard.JustDown(keyENTER)){
            this.game.settings = {
                gameSpeed: 1,
                timer: 0
            }
            this.scene.start('playScene');
        }
    }
}