class Enemy extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, velocity){
        super(scene, game.config.width - laserWidth, Phaser.Math.Between(laserHeight/2, game.config.height - laserHeight/2),'laser');
        this.parentScene = scene;
        this.parentScene.add.existing(this);
        this.moveSpeed = game.settings.gameSpeed
    }
    update(){
        if(this.x < - this.width){
            this.destroy();
        }
    }
}