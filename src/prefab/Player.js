/*class Player extends Phaser.GameObjects.Sprite{
    constructor(scene, x,y,texture,frame){
        super(scene, x,y,texture,frame);
        this.parentScene = scene;
        this.parentScene.add.existing(this);
        this.parentScene.physics.add.existing(this);
    }
    update(){
        if(Phaser.Input.Keyboard.JustDown(keyUP)){
            isMovingU = true;
        }
        if(isMovingU == true){
            this.y -= 5;
        }
        if(Phaser.Input.Keyboard.JustDown(keyDOWN)){
            isMovingD = true;
        }
        if(isMovingD == true){
            this.y -= 5;
        }
    }
}*/