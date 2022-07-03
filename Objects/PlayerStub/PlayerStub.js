class Player {
    constructor(playerTag,moveDirection) {
        this.isPlayerSet = false;
        this.positionMap = {};
        this.playerTag = playerTag;
        // 1 is downward,2 is upward
        this.moveDirection = moveDirection;
        if (!playerTag) {
            throw new Error(`Tag is required`);
        }
    }
    setupPlayerData(data, secondary = false) {
        const length = data.length;
        for (let i = 0; i < length; ++i) {
            this.positionMap[`${data[i]}`] = { row: secondary? 4 : 0, col: i };
        }
    }

    getPreviousPosition(key){
        return this.positionMap[key];
    }
    checkInternalCollision(row,col,currentBoard){
        const value = currentBoard[row][col];
        if(value.split('-')[0] === this.playerTag){
            console.log('Internal Collision Encontered');
            return true
        }
        return false;
    }
    
    updateWithVector(pawn,changeVector,currentBoard){
        if(this.positionMap[pawn].row+changeVector[0]>5 || this.positionMap[pawn].row+changeVector[0]< 0 ){
            throw new Error('Invalid Input');
        }
        if(this.positionMap[pawn].col+changeVector[1]>5 || this.positionMap[pawn].col+changeVector[1]< 0 ){
            throw new Error('Invalid Input');
        }
        const internalCollCheck = this.checkInternalCollision(this.positionMap[pawn].row+changeVector[0],this.positionMap[pawn].col+changeVector[1],currentBoard);
        //In case of an internal collision skip the input entered by the user.
        if(internalCollCheck) {
            return;
        }
        this.positionMap[pawn].row+= changeVector[0];
        this.positionMap[pawn].col+= changeVector[1];
        console.log('position: ',this.positionMap[pawn]);
    }
    updatePosition(position,currentBoard){
        const pawn = position[0];
        let direction = position[1];
        direction = direction.toLowerCase();
        switch(direction){
            case 'l':
                // this.checkCollision(direction)
                this.updateWithVector(pawn,[0,-1],currentBoard);
                break;
            case 'r':
                this.updateWithVector(pawn,[0,1],currentBoard);
                break;
            case 'u':
                // const v1 = this.moveDirection === 1 ? [0,1] : [0,-1];
                this.updateWithVector(pawn,[this.moveDirection === 1 ? 1 : -1,0],currentBoard);
                break;
            case 'd':
                // const v2 = this.moveDirection === 1 ? [] : [];
                this.updateWithVector(pawn,[this.moveDirection === 1 ? 1 : -1,0],currentBoard);
                break;
        }

    }
}
export default Player;