class BootScene extends Phaser.Scene {
    constructor() {
        super("BootScene");
    }
    preload() {
        //this.load.image('sky', 'sky.png');
        this.load.image('tank', 'PNG/Default/tank_dark.png');
        this.load.image('bullet', 'PNG/Default/bulletBlue1.png');

        this.load.image('tiles', 'Tilesheet/terrainTiles_default.png');
		this.load.image('trees', 'Tilesheet/Trees.png');

		
		this.load.tilemapTiledJSON('tilemap', 'maps/terrain-2.json');
		
		
		/*this.load.spritesheet('terrain',
            'Tilesheet/terrainTiles_default.png',
            { frameWidth: 64, frameHeight: 64 }
        ); */
    }
    create() {


        this.scene.start("PlayScene");
    }
}