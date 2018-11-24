import {Brush} from "../Brush";

export class Cell
{
    public readonly size: number;
    private _color: number;

    constructor(size: number) {
        this.size = size;
    }

    get color(): number {
        return this._color;
    }

    set color(color: number) {
        this._color = color;
    }
}