'use strict'

function scoreKeeper() {
    let shots = 0;

    function updateScore(ships) {
        this.shots++;

        let victory = false,
            health = 0;

        ships.forEach(ship => {
            health += ship.health;
        });

        if (health == 0) {
            victory = true;
        }

        return victory;
    }

    return {
        updateScore: updateScore,
        shots: shots
    }
}

module.exports = {
    scoreKeeper: scoreKeeper
}