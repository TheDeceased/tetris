import {Coordinate} from "./Game/Coordinate";
import * as PIXI from "pixi.js";

export class Brush
{
    public static square(start: Coordinate, size: number, graphics: PIXI.Graphics, color: number = 0xffffff, fillColor?: number) {
        Brush.rect(start, new Coordinate(start.x + size, start.y + size), graphics, color, fillColor);
    }

    public static rect(start: Coordinate, end: Coordinate, graphics: PIXI.Graphics, color: number = 0xffffff, fillColor?: number) {
        if (fillColor) {
            graphics.beginFill(fillColor);
        }

        graphics.lineStyle(1, color)
            .moveTo(start.x, start.y)
            .lineTo(end.x, start.y)
            .lineTo(end.x, end.y)
            .lineTo(start.x , end.y)
            .lineTo(start.x , start.y);

        if (fillColor) {
            graphics.endFill();
        }
    }

    public static line(start: Coordinate, end: Coordinate, graphics: PIXI.Graphics, color: number = 0xffffff) {
        graphics.lineStyle(1, color)
            .moveTo(start.x, start.y)
            .lineTo(end.x, end.y);
    }
}