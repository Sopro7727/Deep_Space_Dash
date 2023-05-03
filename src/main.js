/* 
    Noah Walker
    Endless Runner Name:
    Hours Spent(ish): 
*/
let config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 800,
    scene: [Start, Play, End]
}
let game = new Phaser.Game(config);
let borderUISize = game.config.height/2;
let borderPadding = borderUISize/2;
let score = 0;