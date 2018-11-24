import * as PIXI from "pixi.js";
import {Coordinate} from "./Coordinate";
import {Cell} from "./Cell";
import {Brush} from "../Brush";
import {Line} from "../Figures/Line";
import {CellCoordinate} from "./CellCoordinate";
import {Size} from "./size";

export class Grid
{
    private cols: number;
    private rows: number;
    private cellSize: number;
    private cells: Cell[][];
    private figure: Line;
    private lastDelta: number = 0;

    constructor(cols: number, rows: number, cellSize: number) {
        this.cols = cols;
        this.rows = rows;
        this.cellSize = cellSize;
        this.cells = [];
        for (let i = 0; i < this.rows; i++) {
            this.cells[i] = [];
            for (let j = 0; j < this.cols; j++) {
                let cell = new Cell(this.cellSize);
                cell.color = Math.floor(Math.random()*16777215);
                this.cells[i][j] = cell;
            }
        }

        this.figure = new Line(new CellCoordinate(5, 10));

        document.addEventListener('keydown', (event) => {
            const keyName = event.key;
            if (keyName === ' ') {
                this.figure.rotate();
            }
        }, false);
    }

    render(stage: PIXI.Container) {
        let width = this.cols * (this.cellSize);
        let height = this.rows * (this.cellSize);
        let offset = 10;

        const graphics = new PIXI.Graphics();

        for (let i = 0; i < this.cells.length; i++) {
            for (let j = 0; j < this.cells[i].length; j++) {
                let cell = this.cells[i][j];
                Brush.square(new Coordinate(offset + j * cell.size, offset + i * cell.size), cell.size, graphics, 0xff0000, 0x1099bb);
            }
        }

        Brush.rect(new Coordinate(offset, offset), new Coordinate(offset + width, offset + height), graphics, 0xff00ff);

        for (let cellCoord of this.figure.cellIndexes()) {
            Brush.square(cellCoord.toCoordinates(this.cellSize).add(offset, offset), this.cellSize, graphics, 0xff0000,0xffff00);
        }

        stage.addChild(graphics);
    }

    update(stage: PIXI.Container, delta: number, deltaTime: number) {
        this.lastDelta += deltaTime;
        if (this.lastDelta >= 50) {
            this.figure.move(new CellCoordinate(0, 1));
            this.lastDelta = this.lastDelta - 50;
        }

        this.render(stage);
    }

    size(): Size {
        return new Size(this.cols * (this.cellSize) + 10 * 2, this.rows * (this.cellSize) + 10 * 2);
    }
}