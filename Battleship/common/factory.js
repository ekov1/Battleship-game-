'use strict';
const factory = function () {
    const boardSize = 10;

    let id = 1;
    function IDgen() {
        return id++;
    }

    function Boat(type, size) {
        this.id = IDgen();
        this.type = type;
        this.health = size;
    }

    function createDestroyer() {
        return new Boat('Destroyer', 4);
    }

    function createSubmarine() {
        return new Boat('Submarine', 3);
    }

    function createCruiser() {
        return new Boat('Cruiser', 3);
    }

    function createBattleship() {
        return new Boat('Battleship', 5);
    }

    function createCarrier() {
        return new Boat('Carrier', 5);
    }

    function createBoatsForOneSideGame() {
        let boats = [];
        boats.push(this.createBattleship());
        boats.push(this.createDestroyer());
        boats.push(this.createDestroyer());
        return boats
    }

    function Board() {
        this.board = [];
        this.boats = [];
    }

    function createBoard() {
        let board = new Board();

        for (let i = 0; i < boardSize; i += 1) {
            board.board.push(new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
        }

        return board;
    }

    return {
        createDestroyer: createDestroyer,
        createSubmarine: createSubmarine,
        createCruiser: createCruiser,
        createBattleship: createBattleship,
        createCarrier: createCarrier,
        createBoard: createBoard,
        boardSize: boardSize,
        createBoatsForOneSideGame: createBoatsForOneSideGame
    }
};

module.exports = {
    factory: factory
}
