/* global phaser */

// This is the Game scene
class MenuScene extends Phaser.Scene {
  constructor () {
    super({ key: 'gameScene' })
  }

  // background colour in rgb
  init (data) {
    this.cameras.main.setBackgroundColor('#591015')
  }

  // print scene to console for debugging
  preload () {
    console.log('Game Scene')
  }

  create (data) {
    
  }

  // switching to the game scene
  update (time, delta) {
    if (time > 3000) {
      this.scene.switch('gameScene')
    }
  }
}

export default GameScene
