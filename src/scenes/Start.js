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
        this.add.text(game.config.width/2,game.config.height-2, "Endless Runner", menuConfig);
        
    }
    update(){

    }
}