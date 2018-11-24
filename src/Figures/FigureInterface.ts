import {CellCoordinate} from "../Game/CellCoordinate";

export interface FigureInterface {

    rotate();

    move(offset: CellCoordinate)

    cellIndexes();
}