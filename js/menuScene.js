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
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  // print scene to console for debugging
  preload () {
    console.log('Menu Scene')

    // loading menu scene background image
    this.load.image('menuSceneBackground', 'images/aliens_screen_image2.jpg')

    // loading start button image
    this.load.image('startButton', 'images/start.png')
  }

  create (data) {
    // placing menu scene background image
    this.menuSceneBackgroundImage = this.add.sprite(0, 0, 'menuSceneBackground')
    this.menuSceneBackgroundImage.x = 1920 / 2
    this.menuSceneBackgroundImage.y = 1080 / 2

    // placing start button image
    this.startButton = this.add.sprite(1920 / 2, (1080 / 2) + 100, 'startButton')
    
    // making the start button ineractive
    this.startButton.setInteractive({ useHandCursor: true })
    this.startButton.on('pointerdown', () => this.clickButton())
  }

  // switching to the menu scene
  update (time, delta) {
    //if (time > 3000) {
    //  this.scene.switch('menuScene')
    //}
  }

  // game scene starts when start button clicked
  clickButton () {
    this.scene.start('gameScene')
  }
}

export default MenuScene
