export class Coordinate {
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public add(x:number = 0, y:number = 0) {
        this.x += x;
        this.y += y;
        return this;
    }

}