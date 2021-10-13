var config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 800,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: true
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('sky','sky.png');
    this.load.image('tank','PNG/Default/tank_dark.png');

    this.load.spritesheet('terrain', 
    'Tilesheet/terrainTiles_default.png',
    { frameWidth: 64, frameHeight: 64 }
);
}

function create ()
{
    this.add.image(400, 300, 'sky');
    player = this.physics.add.image(100, 450, 'tank');

    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    cursors = this.input.keyboard.createCursorKeys();
    
}

function update ()
{
    var j = 100;
    if (cursors.left.isDown)
    {
        player.setVelocityX(-j);
        player.body.angularVelocity = -j;
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(j);
        player.body.angularVelocity = j;
    }
    else if (cursors.up.isDown)
    {
        player.setVelocityY(-j);
        player.body.angularVelocity = -j;
    }
    else if (cursors.down.isDown)
    {
        player.setVelocityY(j);
        player.body.angularVelocity = -j;
    }
}