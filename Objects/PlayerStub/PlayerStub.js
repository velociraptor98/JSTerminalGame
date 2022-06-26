class Player {
    constructor(positionMap = {}, playerTag) {
        this.isPlayerSet = false;
        this.positionMap = positionMap;
        this.playerTag = playerTag;
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
}
export default Player;