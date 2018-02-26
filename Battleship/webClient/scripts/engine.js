'use strict'

const engine = function ($, factory, initializer, boardRenderer, commandExecutor, textWriter, scoreKeeper) {
    function start() {
        let board = factory.createBoard();
        let boats = factory.createBoatsForOneSideGame();
        board = initializer.oneSidePlayInitialization(board, boats);

        let gameTable = $('#board');
        boardRenderer.renderNormal($, gameTable, factory.boardSize, board);

        $('#fireButton').click(() => {

            let guess = $('#guessInput').val();

            if (guess == 'show') {
                boardRenderer.renderShow($, gameTable, factory.boardSize, board);
                $('#guessInput').val('');
                $('#guessInput').focus();
                return true;
            }

            if (commandExecutor.parseCommand(guess, factory.boardSize, textWriter)) {
                let coordinates = commandExecutor.parseCommand(guess, factory.boardSize, textWriter);
                board = commandExecutor.fireCommand(coordinates, board, textWriter);

                if (scoreKeeper.updateScore(board.boats)) {
                    let shots = scoreKeeper.shots;
                    boardRenderer.renderWin($, gameTable);
                    textWriter.writeMsg(`  You finished the game in ${shots} shots!`);
                    return true;
                }
            }

            $('#guessInput').val('');
            $('#guessInput').focus();
            boardRenderer.renderNormal($, gameTable, factory.boardSize, board);
        })

        $('#guessInput').keypress((e)=>{
            e == e || window.event;
        
            if (e.keyCode == 13) {
                $("#fireButton").trigger("click");
                return false;
            }
        });

    }

    

    return {
        start: start
    }
}

module.exports = {
    engine: engine
}

