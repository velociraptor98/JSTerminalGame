import * as readline from 'node:readline';
class InputHandler {
    static rl = readline.createInterface(process.stdin, process.stdout);
    static demoSampler(prompt = 'Input>',type) {
        return new Promise(function (resolve, reject) {
            InputHandler.rl.setPrompt(prompt)
            InputHandler.rl.prompt();
            InputHandler.rl.on('line', function (line) {
                if (line === "exit" || line === "quit" || line == 'q') {
                    InputHandler.rl.close()
                    return // bail here, so rl.prompt() isn't called again
                }
                if(type === 1){
                    const val = line.split(',');
                    resolve(val);
                    return;
                }
                if(type === 2){
                    const inputMap = line.split(":");
                    resolve(inputMap);
                    return;
                }
                InputHandler.rl.prompt()

            }).on('close', function () {
                console.log('bye');
                resolve(1);
            });
        })
    }

    static initPlayerInput(playerTag){
        const res = InputHandler.demoSampler(`Player - ${playerTag} Input: `,1);
        return res;
    }

    static playerInput(playerTag){
        const res = InputHandler.demoSampler(`Player - ${playerTag} Moves: `,2);
        return res;
    }
}
export default InputHandler;