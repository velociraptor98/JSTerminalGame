import * as readline from 'node:readline';
class InputHandler {
    static demoSampler() {
        return new Promise(function (resolve, reject) {
            let rl = readline.createInterface(process.stdin, process.stdout)
            rl.setPrompt('ready> ')
            rl.prompt();
            rl.on('line', function (line) {
                if (line === "exit" || line === "quit" || line == 'q') {
                    rl.close()
                    return // bail here, so rl.prompt() isn't called again
                }

                if (line === "help" || line === '?') {
                    console.log(`commands:\n  woof\n  exit|quit\n`)
                } else if (line === "woof") {
                    console.log('BARK!')
                } else if (line === "hello") {
                    console.log('Hi there')
                } else {
                    console.log(`unknown command: "${line}"`)
                }
                rl.prompt()

            }).on('close', function () {
                console.log('bye')
                resolve(42) // this is the final result of the function
            });
        })
    }
}
export default InputHandler;