import square from './Square';

class Board {
    squares:Array<square>;
    winner:square;

    constructor() {
        this.squares = new Array(9).fill(square['blank']);
        this.winner = square['blank'];
    }
}

export default Board;