
var cursors;
var spacebar;
var shotReady = true;
var speed = 0;

class PlayScene extends Phaser.Scene {

    constructor() {
        super("PlayScene");
    }


    create() {
       // this.add.image(400, 300, 'sky');
		
		 this.cameras.main.setBounds(0, 0, 2520, 2240);
        this.physics.world.setBounds(0, 0, 2520, 2240);
		
		const map = this.make.tilemap({key: 'tilemap'});
		const tileset = map.addTilesetImage('terrain_set', 'tiles');
		const treeset = map.addTilesetImage('Trees', 'trees');


		map.createLayer('Boden', tileset);
		
        this.player = this.physics.add.image(100, 450, 'tank');
        this.player.body.setMaxSpeed(200);
        this.player.setCircle(21, 2, 0);
		
		map.createLayer('Trees', treeset );

		this.cameras.main.startFollow(this.player, true, 0.08, 0.08);
    
        this.cameras.main.setZoom(4);

        this.player.setCollideWorldBounds(true);

        cursors = this.input.keyboard.createCursorKeys();
        spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    }

    update() {
        if (cursors.up.isDown) {
            if (cursors.up.isDown) {
                if (speed <= 80) {
                    speed = speed + 2;
                } else if (speed <= 120) {
                    speed = speed + 3;
                } else if (speed <= 160) {
                    speed = speed + 4;
                } else if (speed <= 200) {
                    speed = speed + 5;
                } else {
                    speed = 200;
                }
            }
        }
        else if (cursors.down.isDown) {
            if (speed >= 160) {
                speed = speed - 5;
            } else if (speed >= 120) {
                speed = speed - 4;
            } else if (speed >= 80) {
                speed = speed - 3;
            } else if (speed > 0) {
                speed = speed - 2;
            } else {
                speed = 0;
            }
        }
        else {
            this.player.setAcceleration(0);
        }

        if (cursors.left.isDown) {
            this.player.setAngularVelocity(-300);
        }
        else if (cursors.right.isDown) {
            this.player.setAngularVelocity(300);
        }
        else {
            this.player.setAngularVelocity(0);
        }

        if (spacebar.isDown) { this.shoot(); }


        this.physics.velocityFromRotation(this.player.rotation, speed, this.player.body.velocity);
        this.physics.world.wrap(this.player, 100);
    }

    shoot() {
        if(shotReady){
            var bullet = new Bullet(this, this.player.x, this.player.y, 'bullet');
            
            shotReady = false;
            this.time.addEvent({ delay: 1000, callback: this.makeShotReady, callbackScope: this, loop: false });
        }
    }

    makeShotReady() {
        shotReady = true;
    }

}

