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
    this.titleSceneTextStyle = { font: '200px Times', fill: '#00FFFF', align: 'center' }
  }

  // background colour in rgb
  init (data) {
    this.cameras.main.setBackgroundColor('#000080')
  }

  // print scene to console for debugging
  preload () {
    console.log('Title Scene')
    this.load.image('PVZTitleScreen', 'updatedImages/PVZTitleScreen.jpg')
    
  }

  // adding title scene
  create (data) {
    // adding title scene background
    this.PVZTitleScreen = this.add.sprite(0, 0, 'PVZTitleScreen').setScale(2.15)
    this.PVZTitleScreen.x = 1920 / 2 //1920 / 2
    this.PVZTitleScreen.y = 1080 / 2 //1080 / 2

    // adding title scene text
    this.titleSceneText = this.add.text(1920 / 2, (1080 / 2) - 200, 'Electric Boogaloo', this.titleSceneTextStyle).setOrigin(0.50)


  }

  // switching to the menu scene
  update (time, delta) {
    if (time > 6000) {
      this.scene.switch('menuScene')
    }
  }
}

export default TitleScene
