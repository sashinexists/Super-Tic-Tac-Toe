import Board from './Board';
import activeBoard from './ActiveBoard';
import square from './Square';

class Game {
    superBoard:Array<Board>;
    isXturn:boolean;
    activeBoard: activeBoard;
    winner: square;

    constructor() {
        this.superBoard = new Array(9).fill(new Board());
        this.isXturn = true;
        this.activeBoard = activeBoard["all"];
        this.winner = square["blank"];
    }
}

export default Board;