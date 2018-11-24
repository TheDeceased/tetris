import {Coordinate} from "./Coordinate";

export class CellCoordinate {
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public add(coord: CellCoordinate) {
        return new CellCoordinate(this.x + coord.x, this.y + coord.y);
    }

    public toCoordinates(size: number): Coordinate {
        return new Coordinate(this.x * size, this.y * size);
    }
}