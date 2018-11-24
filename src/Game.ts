import * as PIXI from "pixi.js";
import {Size} from "./Game/size";
import {Grid} from "./Game/Grid";

const bunnyPath = require('./bunny.png');

export class Game
{
    private bunny: PIXI.Sprite;
    private app: PIXI.Application;
    private readonly size: Size;
    private grid: Grid;

    constructor() {
        this.grid = new Grid(10, 20, 35);
        this.size = this.grid.size();
    }

    getSize(): Size {
        return this.size;
    }

    bindTo(app: PIXI.Application) {
        this.app = app;
    }

    load() {
        this.addBunny();
        this.addGrid();
    }

    private addBunny() {
        this.bunny = PIXI.Sprite.fromImage(bunnyPath);

        this.bunny.anchor.set(0.5);

        this.bunny.x = this.app.screen.width / 2;
        this.bunny.y = this.app.screen.height / 2;


        this.app.stage.addChild(this.bunny);
    }

    update(delta: number) {
        this.bunny.rotation += 0.1 * delta;
        this.grid.update(this.app.stage, delta, this.app.ticker.deltaTime);
    }

    getOptions(): object {
        return {backgroundColor : 0x1099bb}
    }

    private addGrid() {
        this.grid.render(this.app.stage);
    }
}
