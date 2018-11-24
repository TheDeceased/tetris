import {CellCoordinate} from "../Game/CellCoordinate";
import {FigureInterface} from "./FigureInterface";

export class Line implements FigureInterface {
    private start: CellCoordinate;
    private rotation: number = 0;
    static rotations = [
        [new CellCoordinate(0, 0), new CellCoordinate(0, -1), new CellCoordinate(0, -2), new CellCoordinate(0, -3)],
        [new CellCoordinate(0, 0), new CellCoordinate(1, 0), new CellCoordinate(2, 0), new CellCoordinate(3, 0)],
        [new CellCoordinate(0, 0), new CellCoordinate(0, -1), new CellCoordinate(0, -2), new CellCoordinate(0, -3)],
        [new CellCoordinate(0, 0), new CellCoordinate(1, 0), new CellCoordinate(2, 0), new CellCoordinate(3, 0)],
    ];

    constructor(start: CellCoordinate) {
        this.start = start;
    }

    public rotate() {
        this.rotation += 1;
        if (this.rotation > 3) {
            this.rotation = 0;
        }
    }

    public move(offset: CellCoordinate) {
        this.start = this.start.add(offset);
    }

    public cellIndexes() {
        let coords = [];
        for (let coord of Line.rotations[this.rotation]) {
            coords.push(this.start.add(coord));
        }
        return coords;
    }

}