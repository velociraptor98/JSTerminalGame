import InputHandler from './Core/Input.js';
import Board from './Objects/Board/Board.js';
import Player from './Objects/PlayerStub/PlayerStub.js';
let boardRef = new Board();
let playerA = new Player({},'A');
let playerB = new Player({},'B');
//Section for testing the input

function draw() {
    boardRef.drawBoard(playerA.positionMap,playerB.positionMap);
}

async function initPlayers(){
  if(!playerA.isPlayerSet){
    const result = await InputHandler.initPlayerInput(playerA.playerTag);
    playerA.setupPlayerData(result,false);
    playerA.isPlayerSet = true;
    console.log('Player info: ',playerA.positionMap);
    }
    if(!playerB.isPlayerSet){
      let result = await InputHandler.initPlayerInput(playerB.playerTag);
      playerB.setupPlayerData(result,true);
      console.log('Player info: ',playerB.positionMap);
      playerB.isPlayerSet = true;
    }
}

async function mainLoop() {
    try {
      await initPlayers();
      draw();

    } catch(e) {
      console.log('failed:', e)
    }
  }
  
mainLoop()