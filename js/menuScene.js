/* global phaser */

// This is the Title scene
class TitleScene extends Phaser.Scene {
  constructor () {
    super({ key: 'menuScene' })
  }

  // colour in rgb
  init (data) {
    this.cameras.main.setBackgroundColor('#B23116')
  }

  // print scene to console for debugging
  preload () {
    console.log('Menu Scene')
  }

  create (data) {
    
  }

  update (time, delta) {
    if (time > 3000) {
      this.scene.switch('menuScene')
    }
  }
}

export default MenuScene
