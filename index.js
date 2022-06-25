import InputHandler from './Core/Input.js';
import Board from './Objects/Board/Board.js';
import Player from './Objects/PlayerStub/PlayerStub.js';
let boardRef = new Board();
let playerA = new Player({},'A');
let playerB = new Player({},'B');
//Section for testing the input
let currentKeyStream = [];
// var stdin = process.stdin;
// stdin.setRawMode(false);
// stdin.resume();
// stdin.setEncoding('utf8');
// stdin.on('data', function (key) {
//     // Press the escape key to exit the app
//     if (key === '\u001B') {
//         console.log('Bye Bye, Thanks for playing');
//         process.exit();
//     }
//     process.stdout.write(key);
//     if(!playerA.isPlayerSet){
//         console.log(`Player Input for ${playerA.playerTag}: `);
//         //playerA.setupPlayerData();
//     }
//     else if(!playerB.isPlayerSet){
//         console.log(`Player Input for ${playerB.playerTag}: `);
//         //playerB.setupPlayerData();
//     }
//     if(playerA.isPlayerSet && playerB.isPlayerSet){
//     draw();
//     }
// });

function draw() {
    boardRef.drawBoard();
}

async function run() {
    try {
      let replResult = await InputHandler.demoSampler()
      console.log('repl result:', replResult)
  
    } catch(e) {
      console.log('failed:', e)
    }
  }
  
run()