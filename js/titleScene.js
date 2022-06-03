/* global phaser */

// This is the Title scene
class TitleScene extends Phaser.Scene {
  constructor () {
    super({ key: 'titleScene' })
  }

  // colour in rgb
  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  // print scene to console for debugging
  preload () {
    console.log('Title Scene')
  }

  create (data) {
  }

  update (time, delta) {
  }
}

export default TitleScene
