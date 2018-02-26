'use strict'

const commandExecutor = function () {

    function parseCommand(guess, boardSize, writer) {

        guess = guess.toUpperCase()
        const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
        if (guess == null || guess.length != 2) {
            writer.writeMsg('Please enter a valid guess!');
            return false;
        } else {
            let firstChar = guess.charAt(0);
            let row = letters.indexOf(firstChar);
            let col = guess.charAt(1);

            if (isNaN(row) || isNaN(col)) {
                writer.writeMsg('Please enter a valid guess!');
                return false;
            } else if (row < 0 || row >= boardSize || col < 0 || col >= boardSize) {
                writer.writeMsg('Please enter a valid guess!');
                return false;
            } else {
                return row + col;
            }
        }
        return null;
    }

    function fireCommand(coordinates, board, writer) {
        let gameBoard = board.board;

        writer.writeFire();

        let row = coordinates.charAt(0);
        let col = coordinates.charAt(1);

        if (gameBoard[row][col] === 'hit' || gameBoard[row][col] === 'miss') {
            writer.writeMsg('Already fired there');
            return board;
        }

        let ships = board.boats;
        let flag = 0;

        ships.forEach(ship => {
            if (ship.id == gameBoard[row][col]) {

                gameBoard[row][col] = 'hit';
                flag = 1;
                ship.health -= 1;
                writer.writeHit();
                if (ship.health == 0) {
                    writer.writeMsg(`  Damn! You sank my ${ship.type}!`)
                }
            }
        });

        if (flag == 1) {
            return board;
        }

        writer.writeMiss();
        gameBoard[row][col] = 'miss';
        board.board = gameBoard;
        return board;
    }

    return {
        parseCommand: parseCommand,
        fireCommand: fireCommand
    }
}

module.exports = {
    commandExecutor: commandExecutor
}