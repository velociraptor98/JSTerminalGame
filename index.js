import InputHandler from './Core/Input.js';
import Board from './Objects/Board/Board.js';
import Player from './Objects/PlayerStub/PlayerStub.js';
let boardRef = new Board();
let playerA = new Player('A',1);
let playerB = new Player('B',2);
//Section for testing the input

function draw() {
    boardRef.drawBoard(playerA.positionMap,playerB.positionMap);
}

async function initPlayers() {
  if (!playerA.isPlayerSet) {
    const result = await InputHandler.initPlayerInput(playerA.playerTag);
    playerA.setupPlayerData(result, false);
    playerA.isPlayerSet = true;
  }
  if (!playerB.isPlayerSet) {
    let result = await InputHandler.initPlayerInput(playerB.playerTag);
    playerB.setupPlayerData(result, true);
    playerB.isPlayerSet = true;
  }
}

async function playerMoves() {
  const movesA = await InputHandler.playerInput(playerA.playerTag);
  const movesB = await InputHandler.playerInput(playerB.playerTag);
  const prevPosA = playerA.getPreviousPosition(movesA[0]);
  boardRef.clearBoardAtPos(prevPosA);
  playerA.updatePosition(movesA);
  const prevPosB = playerB.getPreviousPosition(movesB[0]);
  boardRef.clearBoardAtPos(prevPosB);
  playerB.updatePosition(movesB);
  draw();
}

async function mainLoop() {
  try {
    await initPlayers();
    draw();
    while (true) {
      await playerMoves();
    }
  } catch (e) {
    console.log('failed:', e)
  }
}
  
mainLoop()