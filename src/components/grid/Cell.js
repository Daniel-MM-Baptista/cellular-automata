export default class Cell{
    constructor(isAlive, xIndex, yIndex){
        this.isAlive = isAlive;
        this.xIndex = xIndex;
        this.yIndex = yIndex;
    }

    toggleState(){
        this.isAlive = !this.isAlive;
    }

    setIsAlive(bool){
        this.isAlive = bool;
    }
}