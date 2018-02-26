

const miss = [["#     # ###  #####   #####  ### "],
["##   ##  #  #     # #     # ### "],
["# # # #  #  #       #       ### "],
["#  #  #  #   #####   #####   #  "],
["#     #  #        #       #     "],
["#     #  #  #     # #     # ### "],
["#     # ###  #####   #####  ### "]]

const consoleWriter = function () {
    function writeMsg(msg) {
        console.log(msg);
    }

    function writeFire() {
        console.log();
        const fire = [["####### ### ######  ####### ### "],
        ["#        #  #     # #       ### "],
        ["#        #  #     # #       ### "],
        ["#####    #  ######  #####    #  "],
        ["#        #  #   #   #           "],
        ["#        #  #    #  #       ### "],
        ["#       ### #     # ####### ### "]]

        fire.forEach(line => {
            console.log('  ' + line[0]);
        });

        console.log();
    }

    function writeHit() {
        console.log();

        const hit = [["#     # ### ####### ### "],
        ["#     #  #     #    ###"],
        ["#     #  #     #    ###"],
        ["#######  #     #     #  "],
        ["#     #  #     #       "],
        ["#     #  #     #    ### "],
        ["#     # ###    #    ### "]]

        hit.forEach(line => {
            console.log('  ' + line[0]);
        });
        console.log();
    }

    function writeMiss() {
        console.log();

        const miss = [["#### #### ###  #####   ###### ### "],
        [" ##   ##   #  #     # #     # ### "],
        [" # # # #   #  #       #       ### "],
        [" #  #  #   #   #####   #####   #  "],
        [" #     #   #        #       #     "],
        [" #     #   #  #     # #     # ### "],
        ["###   ### ###  #####   #####  ### "]]

        miss.forEach(line => {
            console.log('  ' + line[0]);
        });
        console.log();
    }

    function writeChicken() {
        console.log();

        const chiken = [["   ,~."],
        [" ,-'__ `-,"],
        [" {,-'  `. }              ,')"],
        [",( a )   `-.__         ,',')~,"],
        ["<=.) (         `-.__,==' ' ' '}"],
        [" (   )                      /)"],
        [" `-'     ,                  __)"],
        ["  |            `~.        /"],
        ["  (   `._        \\      /"],
        ["   \\     `._____,'    ,'"],
        ["    `-.             ,'"],
        ["       `-._     _,-'"],
        ["           77jj'"],
        ["          //_||"],
        ["       __//--'/`   "],
        ["     ,--'/`  '"]]

        chiken.forEach(line => {
            console.log('  ' + line[0]);
        });
        console.log();
    }



    return {
        writeMsg: writeMsg,
        writeFire: writeFire,
        writeHit: writeHit,
        writeMiss: writeMiss,
        writeChicken: writeChicken
    }
}


module.exports = {
    consoleWriter: consoleWriter
}