const textWriter = function ($) {
    function writeMsg(msg) {
        $('#msgBox').text(msg);
    }

    function writeFire() {
        $('#msgBox').text('Fire!');
    }

    function writeHit() {
        let txt = $('#msgBox').text() + ' -> Hit!';
        $('#msgBox').text(txt);
    }

    function writeMiss() {
        let txt = $('#msgBox').text() + ' -> Miss!';
        $('#msgBox').text(txt);
    }

    return {
        writeMsg: writeMsg,
        writeFire: writeFire,
        writeHit: writeHit,
        writeMiss: writeMiss
    }
}

module.exports = {
    textWriter: textWriter
}