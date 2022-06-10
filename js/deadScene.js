/* global phaser */

// this is the dead scene
class deadScene extends Phaser.scene {
  constructor () {
    super({ key: 'deadScene' })
  }

  // loading background
  preload () {
    console.log('Dead Scene')
    this.load.image('Dead-screen-RE', './updatedImages/Dead-screen-RE.jpg')
  }

  // 
  create (data) {
    this. = this. ()
  }
  
}

export default DeadScene