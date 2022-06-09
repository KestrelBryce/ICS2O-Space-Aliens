/* global phaser */

// This is the Game scene
class GameScene extends Phaser.Scene {
  constructor () {
    super({ key: 'gameScene' })

    // variable holding game scene background
    this.background = null
    // variable holding spaceship
    this.ship = null
    // boolean holding state of missiles fired
    this.fireMissile = false
  }

  // background colour in rgb
  init (data) {
    this.cameras.main.setBackgroundColor('#591015')
  }

  // print scene to console for debugging
  preload () {
    console.log('Game Scene')

    // images
    // load star background image
    this.load.image('starBackground', 'images/starBackground.png')
    // load ship image
    this.load.image('ship', 'images/spaceShip.png')
    // load 
    this.load.image('missile', 'images/missile.png')
  }

  create (data) {
    // load background
    this.background = this.add.image(0, 0, 'starBackground').setScale(2.0)
    // place background
    this.background.setOrigin(0,0)

    // adding ship physics
    this.ship = this.physics.add.sprite(200, 1080 - 500, 'ship')

    // adding a group for the missiles
    this.missileGroup = this.physics.add.group()
  }

  // 
  update (time, delta) {
    // hopefully called 60 times a second

    // looks for input from left key
    const keyUpObj = this.input.keyboard.addKey('W')
    // looks for input from right key
    const keyDownObj = this.input.keyboard.addKey('S')
    // looks for input from space key
    const keySpaceObj = this.input.keyboard.addKey('SPACE')
    
    // moves ship left
    if (keyUpObj.isDown === true) {
      this.ship.y = this.ship.y - 15
      if (this.ship.y < 0) {
        this.ship.y = 0
      }
    }

    // moves ship right
    if (keyDownObj.isDown === true) {
      this.ship.y = this.ship.y + 15
      if (this.ship.y > 1050) {
        this.ship.y = 1050
      }
    }

    // determines if missile should be fired
    if (keySpaceObj.isDown === true) {
      if (this.fireMissile === false) {
        // fire missile
        this.fireMissile = true
        const aNewMissile = this.physics.add.sprite(this.ship.x, this.ship.y, 'missile')
        this.missileGroup.add(aNewMissile)
      }
    }
    
    if (keySpaceObj.isUp === true) {
      this.fireMissile = false
    }
    
  
  }
}

export default GameScene
