/* global phaser */

// this is the help scene
class HelpScene extends Phaser.Scene {
  constructor () {
    super({ key: 'helpScene' })

    // variable holding dead scene background image
    this.deadScreenPVZ = null

    // variable holding start button image
    this.restartButton = null
  }

  // background colour in rgb
  init (data) {
    this.cameras.main.setBackgroundColor('#008b0a')
  }

  // loading background image
  preload () {
    console.log('Help Scene')
    this.load.image('zombieNote', 'updatedImages/Pvz-help2.webp')
    this.load.image('backButton', 'updatedImages/backButton.webp')
  }

  // creating data
  create (data) {
    // adding background
    this.helpScreenBackgroundImage = this.add.sprite(0, 0, 'zombieNote').setScale(2.5)
    this.helpScreenBackgroundImage.x = 1920 / 2
    this.helpScreenBackgroundImage.y = 1080 / 2

    // placing start button image
    this.backButton = this.add.sprite(420, 1080 - 500, 'backButton')
    
    // making the restart button interactive
    this.backButton.setInteractive({ useHandCursor: true })
    this.backButton.on('pointerdown', () => this.scene.start('menuScene'))

  }

}

export default HelpScene