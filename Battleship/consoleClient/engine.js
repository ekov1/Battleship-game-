'use strict';
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const engine = function (factory, initializer, consoleWriter, commandExecutor, renderer, scoreKeeper) {
    let board = factory.createBoard();
    let boats = factory.createBoatsForOneSideGame();
    board = initializer.oneSidePlayInitialization(board, boats);

    function start() {
        consoleWriter.writeMsg('');
        renderer.renderNormal(board.board, factory.boardSize);
        rl.question('Fire at: ', function (answer) {

            if (answer == 'show') {
                consoleWriter.writeMsg('');
                renderer.renderShow(board, factory.boardSize);
                consoleWriter.writeMsg('');
            }
            if (answer == 'exit') {
                consoleWriter.writeMsg('');
                consoleWriter.writeMsg('You didn`t finish the game and escaped like a chicken!');
                consoleWriter.writeChicken();
                return rl.close();
            }

            else if (commandExecutor.parseCommand(answer, factory.boardSize, consoleWriter)) {
                answer = commandExecutor.parseCommand(answer);
                board = commandExecutor.fireCommand(answer, board, consoleWriter);

                if (scoreKeeper.updateScore(board.boats)) {
                    renderer.renderNormal(board.board, factory.boardSize);
                    let shots = scoreKeeper.shots;
                    consoleWriter.writeMsg(`  You finished the game in ${shots} shots!`);
                    return rl.close();
                }
            }

            start(); //Calling this function again to ask new question
        });
    }


    return {
        start: start
    }
};

module.exports = {
    engine: engine
}