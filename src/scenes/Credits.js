class Credits extends Phaser.Scene{
    constructor(){
        super("creditsScene");
    }
    create(){
            console.log('in credits')
            let menuConfig = {
                fontFamily: 'Courier', 
                fontSize: '28px', 
                backgroundColor: '#F3B141', 
                color: '#843605', 
                align: 'Center', 
                padding: {top: 5, bottom: 5,left: 5, right: 5}, 
                fixedWidth: 0
                
            }
            console.log('running');
            this.add.text(game.config.width/2 - 100,game.config.height/2 - 100, "Credits: ", menuConfig);
            this.add.text(game.config.width/2, game.config.height/2+ 75, "Lead Programmer: Noah Walker\n\nLead Artist: Noah Walker\n\nLead Musician: Noah Walker\n\n\nPress (R) to Restart", menuConfig).setOrigin(0.5);
            menuConfig.backgroundColor = '#00FF00';
            menuConfig.color = '#000';
            this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, "Press ← for Novice or → for Expert", menuConfig).setOrigin(0.5);
            keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    }
    update(){
        if(Phaser.Input.Keyboard.JustDown(keyR)){
            //Reset Variables
            {   
                initSpawnTime = 360;
                survivalTime = 0;
                this.game.settings.gameSpeed = 4; 
                this.scene.start('playScene')
            }          
        }
    }
}
