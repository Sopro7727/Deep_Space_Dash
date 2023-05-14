class End extends Phaser.Scene{
    constructor(){
        super("endScene");
    }
    create(){
        let menuConfig = {
            fontFamily: 'Courier', 
            fontSize: '28px', 
            backgroundColor: '#F3B141', 
            color: '#843605', 
            align: 'Center', 
            padding: {top: 5, bottom: 5,}, 
            fixedWidth: 0
            
        }
        console.log('running');
        this.add.text(game.config.width/2 - 100,game.config.height/2 - 100, "You Died", menuConfig);
        this.add.text(game.config.width/2, game.config.height/2, `Hit R to Restart\n\n\nTime: ${survivalTime}`, menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        console.log(survivalTime);
    }
    update(){
        if(Phaser.Input.Keyboard.JustDown(keyR)){
            //Reset Variables
            {   
                initSpawnTime = 360;
                survivalTime = 0;
                this.game.settings.gameSpeed = 4;
            }
            this.scene.start('playScene')
        }
    }
}
