import React, { useState, useEffect } from 'react'
import Board from './Board'
import '../style/app.css'

export enum square {
  blank = ' ',
  x = '×',
  o = '○',
}

const tiles: Array<square> = new Array(9).fill(square['blank'])
const turn: Boolean = true

interface BoardContextInterface {
  handleTurn(position: number): any
}

export const BoardContext = React.createContext<BoardContextInterface | null>(
  null,
)

function App() {
  const [board, setBoard] = useState(tiles)
  const [isXsTurn, setTurn] = useState(turn)

  const boardContextValue = {
    handleTurn,
  }


  function handleTurn(position: number) {
      if(board[position]=== ' ') {
        setTurn(!isXsTurn);
        makeMove(position);
      }
  }

  function makeMove(position: number) {
    if (board[position] === ' ') {
      
      setBoard(() =>
        board.map((sq, i) => {
          if (i === position) {
            return isXsTurn ? square['x'] : square['o']
          } else {
            return sq
          }
        }),
      )
    }
  }

  function endGame() {
      if (gameOver()) {
          alert("Game end");
      }
  }

  function gameOver() {
      return (board[0]===board[1]&&board[1]===board[2]&&board[2]!==' ')
          || (board[3]===board[4]&&board[4]===board[5]&&board[5]!==' ')
          || (board[6]===board[7]&&board[7]===board[8]&&board[8]!==' ')
          || (board[0]===board[3]&&board[3]===board[6]&&board[6]!==' ')
          || (board[1]===board[4]&&board[4]===board[7]&&board[7]!==' ')
          || (board[2]===board[5]&&board[5]===board[8]&&board[8]!==' ')
          || (board[0]===board[4]&&board[4]===board[8]&&board[8]!==' ')
          || (board[2]===board[4]&&board[4]===board[6]&&board[6]!==' ')
          ;
  }

  useEffect(endGame, [board])


  return (
    <>
      <BoardContext.Provider value={boardContextValue}>
        <Board board={board} />
      </BoardContext.Provider>
    </>
  )
}

export default App
