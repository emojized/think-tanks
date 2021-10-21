var config = {
    type: Phaser.AUTO,
    width: 2520, 
    height: 2240,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: true
        }
    },
    scene:  [BootScene, PlayScene],
};

var game = new Phaser.Game(config);




