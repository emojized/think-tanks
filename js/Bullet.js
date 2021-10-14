class Bullet extends Phaser.Physics.Arcade.Image {
    constructor(scene, x, y, texture){

        super(scene, x, y, texture);

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.angle = scene.player.angle+90;
        this.setCircle(2, 0, 3);
        //scene.physics.velocityFromRotation(scene.player.rotation, 500, this.body.velocity);
    }
}