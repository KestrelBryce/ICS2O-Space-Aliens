/* global phaser */

// This is the Game scene
class GameScene extends Phaser.Scene {

  
  // create a zombie
  createZombie () {
    // randomizing zombie location
    const zombieYLocation = Math.floor(Math.random() * 800) + 100 // <- this will get a number between 800 and 245;

    // adding zombie sprite
    const aZombie = this.physics.add.sprite(2000, zombieYLocation, 'Zombie_sprite2').setScale(0.11)
    aZombie.body.velocity.x = -200
    //aZombie.body.velocity.y = zombieYVelocity


    this.zombieGroup.add(aZombie)
  }
  
  constructor () {
    super({ key: 'gameScene' })

    // variable holding game scene background
    this.background = null
    // variable holding player sprite
    this.player = null
    // boolean holding state of missiles fired
    this.fireMissile = false
    // boolean holding player state
    //let playerDeath = false

    // adding score
    this.score = 0
    this.scoreText = null
    // score text style
    this.scoreTextStyle = { font: '65px Arial', fill: '#ffffff', align: 'center' }
  }

  // background colour in rgb
  init (data) {
    this.cameras.main.setBackgroundColor('#591015')
  }

  // print scene to console for debugging
  preload () {
    console.log('Game Scene')

    // reset the score
    this.score = 0
    
    // images
    // load star background image
    this.load.image('starBackground', 'updatedImages/PVZGameSceneBackground.jpg')
    // load player image
    this.load.image('player', 'updatedImages/electricPeashooterSprite2.png')
    // load missile image
    this.load.image('missile', 'updatedImages/lightningBall.png')
    // load zombie image
    this.load.image('Zombie_sprite2', 'updatedImages/Zombie_sprite2.webp')

    // sounds
    // load missile sound
    this.load.audio('laser', 'updatedSounds/fire.mp3')
    // load zombie death
    this.load.audio('explosion', 'updatedSounds/splat.mp3')
    // load player death
    this.load.audio('gameOver', 'updatedSounds/gameOver.mp3')
    // load music
    this.load.audio('nightAmbience', 'updatedSounds/ultimateBattle.mp3')

    // resume physics
    this.physics.resume()
  }

  create (data) {
    // load background
    this.background = this.add.image(0, 0, 'starBackground').setScale(1.5)
    // place background
    this.background.setOrigin(0,0)
    // adding score text
    this.scoreText = this.add.text(10, 10, 'score: ' + this.score.toString(), this.scoreTextStyle)
    // adding player physics
    this.player = this.physics.add.sprite(420, 1080 - 500, 'player')
    // adding a group for the missiles
    this.missileGroup = this.physics.add.group()
    // adding a group for the zombies
    this.zombieGroup = this.add.group()
    this.createZombie()
    // stopping other sounds
    this.sound.stopAll()
    // adding background ambience
    this.sound.play('nightAmbience')

  // collisions between zombies and bullets
  this.physics.add.collider(this.missileGroup, this.zombieGroup, function (missileCollide, zombieCollide) {
    zombieCollide.destroy()
    missileCollide.destroy()
    // play zombie death
    this.sound.play('explosion')
    // adding to score
    this.score = this.score + 1
    // updating score text
    this.scoreText.setText('Score: ' + this.score.toString())
    // for every destroyed, two spawn
    this.createZombie()
    this.createZombie()
  }.bind(this))

  // collisions between zombies and player
  this.physics.add.collider(this.player, this.zombieGroup, function (playerCollide, zombieCollide) {
    this.sound.stopAll()
    this.sound.play('gameOver')
    this.physics.pause()
    zombieCollide.destroy()
    playerCollide.destroy()
    // destroy all the zombies  
    this.zombieGroup.clear(true, true)
    // destroy all the missiles  
    this.missileGroup.clear(true, true)
    //this.zombieGroup.remove(this.zombieGroup.children[0], true);
    console.log(this.zombieGroup)
    
    this.scene.switch('deadScene')
  }.bind(this))
  
}

  // checking stuff
  update (time, delta) {
    // hopefully called 60 times a second

    // looks for input from W key
    const keyUpObj1 = this.input.keyboard.addKey('W')
    // looks for input from up key
    const keyUpObj2 = this.input.keyboard.addKey('UP')
    
    // looks for input from S key
    const keyDownObj1 = this.input.keyboard.addKey('S')
    // looks for input from down key
    const keyDownObj2 = this.input.keyboard.addKey('DOWN')
    
    // looks for input from space key
    const keySpaceObj = this.input.keyboard.addKey('SPACE')
    
    // moves player up
    if (keyUpObj1.isDown === true) {
      this.player.y = this.player.y - 15
      if (this.player.y < 245) {
        this.player.y = 245
      }
    }
    if (keyUpObj2.isDown === true) {
      this.player.y = this.player.y - 15
      if (this.player.y < 245) {
        this.player.y = 245
      }
    }

    // moves player down
    if (keyDownObj1.isDown === true) {
      this.player.y = this.player.y + 15
      if (this.player.y > 800) {
        this.player.y = 800
      }
    }
    if (keyDownObj2.isDown === true) {
      this.player.y = this.player.y + 15
      if (this.player.y > 800) {
        this.player.y = 800
      }
    }

    // determines if missile should be fired
    if (keySpaceObj.isDown === true) {
      if (this.fireMissile === false) {
        // fire missile
        this.fireMissile = true
        const aNewMissile = this.physics.add.sprite(this.player.x, this.player.y, 'missile').setScale(0.25)
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

    if (this.score === 1) {
      this.scene.switch('winScene')
    }
  
  }
}

export default GameScene
