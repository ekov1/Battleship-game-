'use strict'

const boardInitializer = function () {

    function oneSidePlayInitialization(board, ships) {
        board.boats = ships;
        ships.forEach(ship => {
            board.board = placeShip(board.board, ship);
        });
        return board;
    }

    function placeShip(board, ship) {
        let boardSize = board.length;
        let shipLength = ship.health;

        // 1 = down
        // 0 = right
        let direction = Math.floor(Math.random() * 2);
        let row, col;

        if (direction == 1) {
            let placed = false;
            do {
                row = Math.floor(Math.random() * boardSize);
                col = Math.floor(Math.random() * (boardSize - shipLength + 1));

                if (!collision(board, shipLength, row, col, direction)) {
                    for (let i = col; i < col + shipLength; i += 1) {
                        //console.log(i);
                        board[row][i] = ship.id;
                    }
                    placed = true;
                }
            } while (!placed);

        } else {
            let placed = false;
            do {
                col = Math.floor(Math.random() * boardSize);
                row = Math.floor(Math.random() * (boardSize - shipLength + 1));

                if (!collision(board, shipLength, row, col, direction)) {
                    for (let i = row; i < row + shipLength; i += 1) {
                        board[i][col] = ship.id;
                    }
                    placed = true;
                }
            } while (!placed);
        }
        return board;
    }

    function collision(board, shipLength, row, col, direction) {
        let collision = false;
        if (direction == 1) {
            for (let i = col; i < col + shipLength; i += 1) {
                if (board[row][i] !== 0) {
                    collision = true;
                    break;
                }
            }
        } else {
            for (let i = row; i < row + shipLength; i += 1) {
                if (board[i][col] !== 0) {
                    collision = true;
                    break;
                }
            }
        }
        return collision;
    }

    return {
        oneSidePlayInitialization: oneSidePlayInitialization
    }
}

module.exports = {
    boardInitializer: boardInitializer
}