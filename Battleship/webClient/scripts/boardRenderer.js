const boardRenderer = function () {

    function renderNormal($, gameTableDiv, boardSize, board) {
        gameTableDiv.empty();
        const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
        let rowsColsCount = boardSize;
        gameTable = $('<table></table>').attr({ id: "gameTable" });

        // generate numbers Row
        let numbersRow = $('<tr></tr>').appendTo(gameTable);
        let emptyTd = $('<td></td>').appendTo(numbersRow);

        for (let i = 0; i < boardSize; i += 1) {
            let td = $('<td></td>').text(i).appendTo(numbersRow);
        }

        // generate rest
        for (let i = 0; i < rowsColsCount; i++) {
            let row = $('<tr></tr>').appendTo(gameTable);
            let alphabetCell = $('<td></td>').text(alphabet[i]).appendTo(row);
            for (let j = 0; j < rowsColsCount; j++) {
                let cell = $('<td></td>').attr("id", i + '' + j);

                if (board.board[i][j] == 'hit') {
                    cell.text('X');
                }
                else if (board.board[i][j] == 'miss') {
                    cell.text('_');
                }
                else {
                    cell.text('.');
                }
                cell.appendTo(row);
            }

        }

        gameTable.appendTo(gameTableDiv);

        return true;
    }

    function renderShow($, gameTableDiv, boardSize, board) {

        let ships = board.boats;
        console.log(board.board);
        console.log(ships);

        gameTableDiv.empty();
        const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
        let rowsColsCount = boardSize;
        gameTable = $('<table></table>').attr({ id: "gameTable" });

        // generate numbers Row
        let numbersRow = $('<tr></tr>').appendTo(gameTable);
        let emptyTd = $('<td></td>').appendTo(numbersRow);

        for (let i = 0; i < boardSize; i += 1) {
            let td = $('<td></td>').text(i).appendTo(numbersRow);
            console.log('generate numbers Row ' + i);
        }

        // generate rest
        for (let i = 0; i < rowsColsCount; i++) {
            let row = $('<tr></tr>').appendTo(gameTable);
            let alphabetCell = $('<td></td>').text(alphabet[i]).appendTo(row);
            console.log(i);
            for (let j = 0; j < rowsColsCount; j++) {
                let cell = $('<td></td>').attr("id", i + '' + j);

                if (board.board[i][j] == 0 || board.board[i][j] == 'miss') {
                    cell.text(' ');
                    console.log(cell.text());
                }
                else if (board.board[i][j] == 'hit') {
                    cell.text('X');
                    console.log(cell.text());
                }
                else {
                    ships.forEach(ship => {
                        console.log(ship);
                        if (ship.id == board.board[i][j]) {
                            cell.text('X');
                        }
                        return true;
                    });
                }
                console.log(cell.text());
                cell.appendTo(row);
            }
        }

        gameTable.appendTo(gameTableDiv);

        return true;
    }

    function renderWin($, gameTableDiv) {
        $('#fireForm').hide();
        $(gameTableDiv).empty();

        let video = $('<iframe/>', {
            id: 'video',
            src: 'https://www.youtube.com/embed/G8_ymPBZG_Y',
            height: 200,
            allowfullscreen: ''
        });

        //as noted in addendum, check for querystring exitence
        var symbol = video[0].src.indexOf("?") > -1 ? "&" : "?";
        //modify source to autoplay and start video
        video[0].src += symbol + "autoplay=1";


        video.appendTo(gameTableDiv);



       let div = $('<div></div>').appendTo(gameTableDiv);

        $('<button/>')
            .text('Play Again')
            .click(function () {
                location.reload();
            }).appendTo(div);


    }

    return {
        renderNormal: renderNormal,
        renderShow: renderShow,
        renderWin: renderWin

    }
}

module.exports = {
    boardRenderer: boardRenderer
}