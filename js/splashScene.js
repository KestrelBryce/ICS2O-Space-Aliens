/* global phaser */

// This is the Splash scene
class SplashScene extends Phaser.Scene {
  constructor () {
    super({ key: 'splashScene' })
  }

  // background colour in rgb
  init (data) {
    // change background colour
    this.cameras.main.setBackgroundColor('#609EA2')
  }

  // print scene to console for debugging
  preload () {
    console.log('Splash Scene')
    this.load.image('splashSceneBackground', 'updatedImages/Mac-logo.jpg')
    this.load.audio('PVZintro', 'updatedSounds/introTheme.mp3')
  }

  create (data) {
    this.splashSceneBackgroundImage = this.add.sprite(0, 0, 'splashSceneBackground').setScale(2.0)
    this.splashSceneBackgroundImage.x = 1920 / 2
    this.splashSceneBackgroundImage.y = 1080 / 2

    // adding background ambience
    this.sound.play('PVZintro')
  }

  // stopping splash scene and moving to title screen
  update (time, delta) {
    if (time > 10000) {
      this.scene.switch('titleScene')
    }
    
  }
}

export default SplashScene
