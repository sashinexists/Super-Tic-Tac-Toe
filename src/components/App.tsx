import React, { useState, useEffect } from 'react'
import newGame, { Game } from '../shared/Game'
import '../style/app.css'
import SuperBoard from './SuperBoard'
import square from '../shared/Square'
import { Board } from '../shared/Board'
import selectBoard from '../shared/SelectBoard'

interface GameContextInterface {
  handleTurn: (x: number, y:number) => void
}

export const GameContext = React.createContext({} as GameContextInterface)

function App() {
  const game: Game = newGame()
  const [gameBoard, updateGameBoard] = useState(game.superBoard)
  const [isXTurn, setTurn] = useState(game.isXTurn)
  const [activeBoard, setActiveBoard] = useState(game.activeBoard)
  //const [gameData, updateGame] = useState(game);
  //console.log(game);

  function handleTurn(board: number, position: number) {
    if (gameBoard[board].squares[position] === square['blank']) {
      makeMove(board, position);
      setTurn(!isXTurn);
      setActiveBoard(position);
    }
  }


  function makeMove(boardNumber: number, position: number):void {
    const updatedGameBoard:Array<Board> = gameBoard.map((board,i) => {
      if(i===boardNumber) {
        const squares:Array<square> = updateBoard(board, position);
        const newBoard:Board = {
          squares: squares,
          winner: square["blank"]
        }
        return newBoard;
      } else {
        return board;
      }
    })
    updateGameBoard(updatedGameBoard);
  }

  function updateBoard(board:Board, position:number):Array<square> {
    return board.squares.map((sq, i) => {
      if(i===position&&board.squares[i]===square["blank"]) {
        return isXTurn ? square["x"] : square["o"];
      } else {
        return sq;
      }
    })
  }

  const gameContextValue = {
    handleTurn,
  }

  return (
    <GameContext.Provider value={gameContextValue}>
      <SuperBoard gameboard={gameBoard} activeBoard={activeBoard} />
    </GameContext.Provider>
  )
}

export default App
