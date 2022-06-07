/* global phaser */

// This is the Menu scene
class MenuScene extends Phaser.Scene {
  constructor () {
    super({ key: 'menuScene' })
  }

  // background colour in rgb
  init (data) {
    this.cameras.main.setBackgroundColor('#591015')
  }

  // print scene to console for debugging
  preload () {
    console.log('Menu Scene')
  }

  create (data) {
    
  }

  // switching to the menu scene
  update (time, delta) {
    if (time > 3000) {
      this.scene.switch('menuScene')
    }
  }
}

export default MenuScene
