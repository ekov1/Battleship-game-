'use strict'

const consoleRenderer = function () {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

    function renderNormal(board, boardSize) {
        console.log('    0 1 2 3 4 5 6 7 8 9');
        console.log('    ____________________');
        for (let i = 0; i < boardSize; i += 1) {
            let row = ' ' + letters[i] + ' |';
            for (let j = 0; j < boardSize; j += 1) {
                if (board[i][j] == 'hit') {
                    row += 'X'
                }
                else if (board[i][j] == 'miss') {
                    row += '_'
                }
                else {
                    row += '.';
                }
                row += ' '
            }
            console.log(row + '|');
        }
        console.log('   |____________________|');
    }

    function renderShow(board, boardSize) {
        let gameBoard = board.board;
        let ships = board.boats;

        console.log(ships);
        console.log('    0 1 2 3 4 5 6 7 8 9');
        console.log('    ____________________');
        for (let i = 0; i < boardSize; i += 1) {
            let row = ' ' + letters[i] + ' |';
            for (let j = 0; j < boardSize; j += 1) {
                if (gameBoard[i][j] == 0 || gameBoard[i][j] == 'miss') {
                    row += ' '
                }
                else if (gameBoard[i][j] == 'hit') {
                    row += 'X'
                }
                else {
                    ships.forEach(ship => {
                        if (ship.id == gameBoard[i][j]) {
                            row += 'X'
                        }
                    });
                }
                row += ' '
            }
            console.log(row + '|');
        }
        console.log('   |____________________|');
    }

    return {
        renderNormal: renderNormal,
        renderShow: renderShow
    }
}

module.exports = {
    consoleRenderer: consoleRenderer
}