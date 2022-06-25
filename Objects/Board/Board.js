class Board {
  
    constructor(rows = 5,cols = 5){
        this.rows = rows;
        this.cols = cols;
        this.boardStruct = Array(rows).fill().map(() => Array(cols).fill(0));
        // Remove this
        this.boardStruct[1][1] = 1;
    }

    drawBoard(){
        console.log(this.boardStruct);
    }
}

export default Board;