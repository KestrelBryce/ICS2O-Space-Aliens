/* global phaser */

// This is the Game scene
class GameScene extends Phaser.Scene {

  // create a zombie
  createZombie () {
    const aZombie = this.physics.add.sprite(100, 100, 'Zombie_sprite', width = '100px', length = 'auto')
    this.zombieGroup.add(aZombie)
  }
  
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
    // load missile image
    this.load.image('missile', 'images/missile.png')
    // load zombie image
    this.load.image('Zombie_sprite', 'updatedImages/Zombie_sprite.webp')

    // sounds
    // load missile sound
    this.load.audio('laser', 'sounds/laser1.wav')
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

    // adding a group for the zombies
    this.zombieGroup = this.add.group()
    this.createZombie()
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
        // add missile sound
        this.sound.play('laser')
      }
    }
    
    if (keySpaceObj.isUp === true) {
      this.fireMissile = false
    }

    this.missileGroup.children.each(function (item) {
      item.x = item.x + 15
      if (item.x > 2000) {
        item.destroy()
      }
    })
  
  }
}

export default GameScene
