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
    checkInternalCollision(){
        const keys = Object.keys(this.positionMap);
        for(let key of keys){
            
        }
    }
    updateWithVector(pawn,changeVector){
        if(this.positionMap[pawn].row+changeVector[0]>5 || this.positionMap[pawn].row+changeVector[0]< 0 ){
            throw new Error('Invalid Input');
        }
        if(this.positionMap[pawn].col+changeVector[1]>5 || this.positionMap[pawn].col+changeVector[1]< 0 ){
            throw new Error('Invalid Input');
        }
        this.positionMap[pawn].row+= changeVector[0];
        this.positionMap[pawn].col+= changeVector[1];
        console.log('position: ',this.positionMap[pawn]);
    }
    updatePosition(position){
        const pawn = position[0];
        let direction = position[1];
        direction = direction.toLowerCase();
        switch(direction){
            case 'l':
                // this.checkCollision(direction)
                this.updateWithVector(pawn,[0,-1]);
                break;
            case 'r':
                this.updateWithVector(pawn,[0,1]);
                break;
            case 'u':
                // const v1 = this.moveDirection === 1 ? [0,1] : [0,-1];
                this.updateWithVector(pawn,[this.moveDirection === 1 ? 1 : -1,0]);
                break;
            case 'd':
                // const v2 = this.moveDirection === 1 ? [] : [];
                this.updateWithVector(pawn,[this.moveDirection === 1 ? 1 : -1,0]);
                break;
        }

    }
}
export default Player;