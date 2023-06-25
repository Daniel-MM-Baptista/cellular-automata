import { create2DArray } from "../../utils/Utils";
import Cell from "./Cell";

export default class CellGrid{
    constructor(rows, columns){
        this.rows = rows;
        this.columns = columns;
        this.state = create2DArray(rows, columns);
        this.generateNextState = this.generateNextState.bind(this);
        this.initializeGrid();
    }

    initializeGrid(){
        for(let i = 0; i < this.rows; i++){
            for(let j = 0; j < this.columns; j++){
                this.state[i][j] = new Cell(false, i, j)
            }
        }
    }

    countActiveAdjacentCellsFromIndex(xIndex, yIndex){
        let gridLength = this.state.length;
        let startXIndex = (xIndex - 1 < 0) ? 0 : xIndex - 1, startYIndex = (yIndex - 1 < 0) ? 0 : yIndex - 1;
        let endXIndex = (xIndex + 2 > gridLength) ? gridLength : xIndex + 2, endYIndex = (yIndex + 2 > gridLength) ? gridLength : yIndex + 2;
        let adjacentCells = this.state.slice(startXIndex, endXIndex).map(row => row.slice(startYIndex, endYIndex));
        
        let numActiveAdjacentCells = 0;
        for(let row of adjacentCells){
            for(let cell of row){
                if(cell.xIndex !== xIndex || cell.yIndex !== yIndex){
                    numActiveAdjacentCells += cell.isAlive;
                }
            }
        }
        return numActiveAdjacentCells;
    }

    generateNextState(){
        let gridCopy = [...this.state];
        let listOfCells = [];
        for(let row of gridCopy){
            for(let cell of row){
                const numAdjacentCells = this.countActiveAdjacentCellsFromIndex(cell.xIndex, cell.yIndex);

                if(!cell.isAlive && numAdjacentCells === 3) {
                    listOfCells.push(cell);
                } else if(cell.isAlive && (numAdjacentCells !== 2 && numAdjacentCells !== 3)) {
                    listOfCells.push(cell);
                }
            }
        }

        for(let cell of listOfCells) cell.toggleState();
        
        return gridCopy;
    }
}