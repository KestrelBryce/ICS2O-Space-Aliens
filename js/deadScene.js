/* global phaser */

// this is the dead scene
class DeadScene extends Phaser.Scene {
  constructor () {
    super({ key: 'deadScene' })

    // variable holding dead scene background image
    this.menuSceneBackgroundImage = null

    // variable holding start button image
    this.restartButton = null
  }

  // background colour in rgb
  init (data) {
    this.cameras.main.setBackgroundColor('#000000')
  }

  // loading background image
  preload () {
    console.log('Dead Scene')
    this.load.image('deadScreenRE', './updatedImages/deadScreenRE.jpg')
    this.load.image('startButton', 'images./start.png')
  }

  // creating data
  create (data) {
    // adding background
    this.deadScreenRE = this.add.sprite(0, 0, 'deadScreenRE')
    this.deadScreenRE.x = 1920 / 2
    this.deadScreenRE.y = 1080 / 2

    // placing start button image
    this.startButton = this.add.sprite(1920 / 2, (1080 / 2) + 100, 'startButton')
    
    // making the restart button interactive
    this.startButton.setInteractive({ useHandCursor: true })
    this.startButton.on('pointerdown', () => this.scene.start('gameScene'))
  }

  // clicking button goes to game scene
  //clickButton () {
    //this.scene.start('gameScene')
    //this.scene.start('menuScene')
  //}
}

export default DeadScene