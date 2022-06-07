/* global phaser */

// This is the Title scene
class TitleScene extends Phaser.Scene {
  constructor () {
    super({ key: 'titleScene' })

    // variable holding title scene background image
    this.titleSceneBackgroundImage = null

    // variable holding title scene text
    this.titleSceneText = null

    // variable holding title scene text style
    this.titleSceneTextStyle = { font: '200px Times', fill: '#fde4b9', align: 'center' }
  }

  // background colour in rgb
  init (data) {
    this.cameras.main.setBackgroundColor('#B23116')
  }

  // print scene to console for debugging
  preload () {
    console.log('Title Scene')
    this.load.image('titleSceneBackground', 'images/aliens_screen_image.jpg')
  }

  // adding title scene
  create (data) {
    // adding title scene background
    this.titleSceneBackgroundImage = this.add.sprite(0, 0, 'titleSceneBackground').setScale(2.75)
    this.titleSceneBackgroundImage.x = 1920 / 2
    this.titleSceneBackgroundImage.y = 1080 / 2

    // adding title scene text
    this.titleSceneText = this.add.text(1920 / 2, (1080 / 2) + 350, 'Space Aliens', this.titleSceneTextStyle).setOrigin(0.5)
  }

  // switching to the title scene
  update (time, delta) {
    if (time > 3000) {
      this.scene.switch('titleScene')
    }
  }
}

export default TitleScene
