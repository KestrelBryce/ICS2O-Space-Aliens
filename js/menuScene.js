/* global phaser */

// This is the Menu scene
class MenuScene extends Phaser.Scene {
  constructor () {
    super({ key: 'menuScene' })

    // variable holding menu scene background image
    this.menuSceneBackgroundImage = null

    // variable holding start button image
    this.startButton1 = null

    // variable holding game mode
    this.endlessMode = null

    // variable holding title scene text style
    this.menuSceneTextStyle = { font: '75px Times', fill: '#000000', align: 'center' }
  }

  // background colour in rgb
  init (data) {
    this.cameras.main.setBackgroundColor('#ddede2')
  }

  // print scene to console for debugging
  preload () {
    console.log('Menu Scene')

    // loading menu scene background image
    this.load.image('menuSceneBackground', 'updatedImages/PVZMenuScene.jpg')

    // loading start button image
    this.load.image('playButton2', 'updatedImages/playButton2.webp')

    // loading help button image
    this.load.image('helpButton', 'updatedImages/helpButton.png')
  }

  create (data) {
    // placing menu scene background image
    this.menuSceneBackgroundImage = this.add.sprite(0, 0, 'menuSceneBackground')
    this.menuSceneBackgroundImage.x = 1920 / 2
    this.menuSceneBackgroundImage.y = 1080 / 2

    // standard button text
    this.menuSceneText = this.add.text(1920 / 2, (1080 / 2) + 200, 'Normal     Help    Endless', this.menuSceneTextStyle).setOrigin(0.50)
    
    // placing standard button image
    this.startButton1 = this.add.sprite(700, 1300 - 400, 'playButton2').setScale(0.35)

    // placing endless button image
    this.startButton2 = this.add.sprite(1250, 1300 - 400, 'playButton2').setScale(0.35)

    // placing help button image
    this.helpButton = this.add.sprite(975, 1300 - 400, 'helpButton').setScale(0.25)

    
    // making the standard button interactive
    this.startButton1.setInteractive({ useHandCursor: true })
    this.startButton1.on('pointerdown', () => this.scene.start('gameScene'))

    // making the endless button interactive
    this.startButton2.setInteractive({ useHandCursor: true })
    this.startButton2.on('pointerdown', () => this.scene.start('gameScene'))
    // this.endlessMode === true,
    
    // making the help button interactive
    this.helpButton.setInteractive({ useHandCursor: true })
    this.helpButton.on('pointerdown', () => this.scene.start('helpScene'))

  }
  
}

export default MenuScene
