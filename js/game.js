/* global phaser */

import SplashScene from "./splashScene.js"
import TitleScene from "./titleScene.js"
import MenuScene from "./menuScene.js"
import HelpScene from "./helpScene.js"
import GameScene from "./gameScene.js"
import DeadScene from "./deadScene.js"
import WinScene from "./winScene.js"

// Our game scenes
const splashScene = new SplashScene()
const titleScene = new TitleScene()
const menuScene = new MenuScene()
const helpScene = new HelpScene()
const gameScene = new GameScene()
const deadScene = new DeadScene()
const winScene = new WinScene()

//* Game scene */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: "arcade",
    arcade: {
      debug: false
    }
  },
  // Set background colour
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    // Placing it in the middle of the page
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
}

const game = new Phaser.Game(config)

// load scenes
// NOTE: remember any "key" is global and CAN NOT be reused!
game.scene.add('splashScene', splashScene)
game.scene.add('titleScene', titleScene)
game.scene.add('menuScene', menuScene)
game.scene.add('helpScene', helpScene)
game.scene.add('gameScene', gameScene)
game.scene.add('deadScene', deadScene)
game.scene.add('winScene', winScene)

// start title
game.scene.start('splashScene')
