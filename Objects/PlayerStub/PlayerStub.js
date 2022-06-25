class Player{
    constructor(positionMap = {},playerTag){
        this.isPlayerSet = false;
        this.positionMap = positionMap;
        this.playerTag = playerTag;
        if(!playerTag){
            throw new Error(`Tag is required`);
        }
    }
    setupPlayerData(data){

    }
}
export default Player;