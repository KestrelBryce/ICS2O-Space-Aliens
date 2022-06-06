/* global phaser */

// This is the Splash scene
class SplashScene extends Phaser.Scene {
  constructor () {
    super({ key: 'splashScene' })
  }

  // colour in rgb
  init (data) {
    // change background colour
    this.cameras.main.setBackgroundColor('#609EA2')
  }

  // print scene to console for debugging
  preload () {
    console.log('Splash Scene')
    this.load.image('splashSceneBackground', './images/splashSceneImage.png')
  }

  create (data) {
    this.splashSceneBackgroundImage = this.add.sprite(0, 0, 'splashSceneBackground')
    this.splashSceneBackgroundImage.x = 1920 / 2
    this.splashSceneBackgroundImage.y = 1080 / 2
  }

  // stopping splash scene and moving to title screen
  update (time, delta) {
    if (time > 10000) {
      this.scene.switch('titleScene')
    }
    
  }
}

export default SplashScene
