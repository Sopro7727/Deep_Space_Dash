/* 
    Noah Walker
    Endless Runner Name:
    Hours Spent(ish): 8
*/
let config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 800,
    physics:{
        default: "arcade",
        arcade: {
            debug: true
        }
    },
    backgroundColor: 'white',
    scene: [Start, Play, End]
}
let game = new Phaser.Game(config);
let borderUISize = game.config.height/2;
let borderPadding = borderUISize/2;
let score = 0;
let keyUP, keyDOWN, keyENTER;
let centerX = game.config.width/2;