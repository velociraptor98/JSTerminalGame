class Board {
  
    constructor(rows = 5,cols = 5){
        this.rows = rows;
        this.cols = cols;
        this.boardStruct = Array(rows).fill().map(() => Array(cols).fill('-'));
    }

    updateBoard(keys,positionMap,tag){
        for(let key of keys){
            const position = positionMap[key];
            console.log('temp debug: ',position);
            this.boardStruct[position.row][position.col] =  `${tag}-${key}`;
        }
    }

    drawBoard(positionMapA,positionMapB){
        const keysA = Object.keys(positionMapA);
        const keysB = Object.keys(positionMapB);
        this.updateBoard(keysA,positionMapA,'A');
        this.updateBoard(keysA,positionMapB,'B');
        for(let i = 0;i<5;++i){
            console.log(`${this.boardStruct[i][0]} ${this.boardStruct[i][1]} ${this.boardStruct[i][2]} ${this.boardStruct[i][3]} ${this.boardStruct[i][4]}`);
        }
    }
}

export default Board;