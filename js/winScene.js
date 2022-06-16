/* global phaser */

// this is the dead scene
class WinScene extends Phaser.Scene {
  constructor () {
    super({ key: 'winScene' })

    // variable holding dead scene background image
    this.winScreenPVZ = null

    // variable holding start button image
    this.restartButton = null
  }

  // background colour in rgb
  init (data) {
    this.cameras.main.setBackgroundColor('#330508')
  }

  // loading background image
  preload () {
    console.log('Dead Scene')
    this.load.image('winScreen', 'updatedImages/winScreen.png')
    this.load.image('startButton', 'updatedImages/playButton2.webp')
    this.load.image('backButton', 'updatedImages/backButton.webp')
  }

  // creating data
  create (data) {
    // adding background
    this.winScreenBackgroundImage = this.add.sprite(0, 0, 'winScreen')
    this.winScreenBackgroundImage.x = 1920 / 2
    this.winScreenBackgroundImage.y = 1080 / 2

    // placing start button image
    this.startButton = this.add.sprite(1920 / 2, (1080 / 2) + 200, 'startButton').setScale(0.35)

    // placing back button image
    this.backButton = this.add.sprite(1920 / 2, (1080 / 2) + 400, 'backButton').setScale(0.35)
    
    // making the restart button interactive
    this.startButton.setInteractive({ useHandCursor: true })
    this.startButton.on('pointerdown', () => this.scene.start('gameScene'))

    // making the back button interactive
    this.backButton.setInteractive({ useHandCursor: true })
    this.backButton.on('pointerdown', () => this.scene.start('menuScene'))

  }

}

export default WinScene