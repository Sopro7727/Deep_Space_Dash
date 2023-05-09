class Player extends Phaser.GameObjects.Sprite{
    constructor(scene, x,y,texture,frame){
        super(scene, x,y,texture,frame);
        scene.add.existing(this);
    }
    update(){
        if(Phaser.Input.Keyboard.JustDown(keyUP)){
            this.y -= 100;
        }
        if(Phaser.Input.Keyboard.JustDown(keyDOWN)){
            this.y += 100;
        }
    }
}