import * as PIXI from 'pixi.js';
import {Game} from "./Game";

const game = new Game();

const app = new PIXI.Application(game.getSize().width, game.getSize().height, game.getOptions());
document.body.appendChild(app.view);

game.bindTo(app);

game.load();

// Listen for animate update
app.ticker.add(game.update.bind(game));