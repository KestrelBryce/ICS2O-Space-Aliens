/* global phaser */

// This is the Menu scene
class MenuScene extends Phaser.Scene {
  constructor () {
    super({ key: 'menuScene' })

    // variable holding menu scene background image
    this.menuSceneBackgroundImage = null

    // variable holding start button image
    this.startButton = null
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

    // placing start button image
    this.startButton = this.add.sprite(1920 / 2, (1080 / 2) + 100, 'playButton2').setScale(0.35)

    // placing help button image
    this.helpButton = this.add.sprite(1000, 1300 - 500, 'helpButton').setScale(0.25)
    
    // making the start button ineractive
    this.startButton.setInteractive({ useHandCursor: true })
    this.startButton.on('pointerdown', () => this.scene.start('gameScene'))

    // making the help button interactive
    this.helpButton.setInteractive({ useHandCursor: true })
    this.helpButton.on('pointerdown', () => this.scene.start('helpScene'))

    //this.startButton.on('pointerdown', () => this.scene.start('gameScene'))
  }

  // switching to the menu scene
  update (time, delta) {
    //if (time > 3000) {
    //  this.scene.switch('menuScene')
    //}
  }

  // game scene starts when start button clicked
  //clickButton () {
  //  this.scene.start('gameScene')
  //}

  // testing making help button work
  
}

export default MenuScene
