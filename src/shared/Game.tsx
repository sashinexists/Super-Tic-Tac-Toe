import newBoard, {Board} from './Board';
import selectBoard from './SelectBoard';
import square from './Square';

export interface Game {
    superBoard:Array<Board>;
    isXTurn:boolean;
    activeBoard: selectBoard;
    winner: square;
    //gameOvers: Array<number>;
    results: Array<square>
  }
  
  const newGame = ():Game => ({
      superBoard:new Array(9).fill(newBoard()),
      isXTurn:true,
      activeBoard:selectBoard["all"],
      winner:square["blank"],
      //gameOvers:new Array<number>(),
      results: [
        square["blank"] , square["blank"] , square["blank"] , 
        square["blank"] , square["blank"] , square["blank"] , 
        square["blank"] , square["blank"] , square["blank"]]
  })

export default newGame;