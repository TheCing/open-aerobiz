import 'phaser';

import { SimpleScene } from './scenes/simple-scene';

var gameWidth = window.innerWidth;
var gameHeight = window.innerHeight;

const gameConfig = {
  width: gameWidth,
  height: gameHeight,
  scene: SimpleScene
};

new Phaser.Game(gameConfig);
