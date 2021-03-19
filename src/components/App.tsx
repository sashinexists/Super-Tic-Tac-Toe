import React, { useState, useEffect } from 'react'
import newGame, { Game } from '../shared/Game'
import '../style/app.css'
import SuperBoard from './SuperBoard'
import square from '../shared/Square'
import { Board } from '../shared/Board'

interface GameContextInterface {
  handleTurn: (x: number, y: number) => void
}

export const GameContext = React.createContext({} as GameContextInterface)

function App() {
  const game: Game = newGame()
  const [gameBoard, updateGameBoard] = useState(game.superBoard)
  const [isXTurn, setTurn] = useState(game.isXTurn)
  const [activeBoard, setActiveBoard] = useState(game.activeBoard)
  const [results, setResults] = useState(game.results)

  function handleTurn(boardNumber: number, position: number) {
    if (isValidMove(boardNumber, position)) {
      makeMove(boardNumber, position);
      setTurn(!isXTurn);
      setActiveBoard(position);
      updateScore();
      checkWinner();
    }
  }

  function isValidMove(board: number, position: number) {
    return (
      gameBoard[board].squares[position] === square['blank'] &&
      (board === activeBoard || 9 === activeBoard) &&
      gameBoard[board].winner === square['blank']
    )
  }

  useEffect(() => {
    if (
      9 !== activeBoard &&
      gameBoard[activeBoard].winner !== square['blank']
    ) {
      setActiveBoard(9)
    }
  }, [activeBoard, gameBoard])

  function updateResults(boardNumber: number, winner: square) {
    const newResults: Array<square> = results
    newResults[boardNumber] = winner
    setResults(() => newResults)
  }

  function makeMove(boardNumber: number, position: number): void {
    const updatedGameBoard: Array<Board> = gameBoard.map((board, i) => {
      if (i === boardNumber) {
        const squares: Array<square> = updateBoard(board, position)
        const newBoard: Board = {
          squares: squares,
          winner: square['blank'],
        }
        return newBoard
      } else {
        return board
      }
    })
    updateGameBoard(updatedGameBoard)
  }

  function updateScore() {
    gameBoard.forEach((board, boardNumber) => {
      const winner = getWinner(board)
      if (board.winner !== winner) {
        setWinner(boardNumber, winner)
        updateResults(boardNumber, winner)
      }
    })
  }

  function updateBoard(board: Board, position: number): Array<square> {
    return board.squares.map((sq, i) => {
      if (i === position && board.squares[i] === square['blank']) {
        return isXTurn ? square['x'] : square['o']
      } else {
        return sq
      }
    })
  }

  function setWinner(boardNumber: number, winner: square) {
    const updatedGameBoard: Array<Board> = gameBoard.map((board, i) => {
      if (boardNumber === i) {
        board.winner = winner
      }
      return board
    })
    updateGameBoard(updatedGameBoard)
  }

  function getWinner(board: Board) {
    const squares = board.squares
    if (
      squares[0] === squares[1] &&
      squares[1] === squares[2] &&
      squares[2] !== square['blank']
    ) {
      return squares[0]
    } else if (
      squares[3] === squares[4] &&
      squares[4] === squares[5] &&
      squares[5] !== square['blank']
    ) {
      return squares[3]
    } else if (
      squares[6] === squares[7] &&
      squares[7] === squares[8] &&
      squares[8] !== square['blank']
    ) {
      return squares[6]
    } else if (
      squares[0] === squares[3] &&
      squares[3] === squares[6] &&
      squares[6] !== square['blank']
    ) {
      return squares[0]
    } else if (
      squares[1] === squares[4] &&
      squares[4] === squares[7] &&
      squares[7] !== square['blank']
    ) {
      return squares[1]
    } else if (
      squares[2] === squares[5] &&
      squares[5] === squares[8] &&
      squares[8] !== square['blank']
    ) {
      return squares[8]
    } else if (
      squares[0] === squares[4] &&
      squares[4] === squares[8] &&
      squares[8] !== square['blank']
    ) {
      return squares[0]
    } else if (
      squares[2] === squares[4] &&
      squares[4] === squares[6] &&
      squares[6] !== square['blank']
    ) {
      return squares[2]
    } else {
      return square['blank']
    }
  }

  function checkWinner() {
    if (
      results[0] === results[1] &&
      results[1] === results[2] &&
      results[2] !== square['blank']
    ) {
      alert('The winner is ' + results[0])
    } else if (
      results[3] === results[4] &&
      results[4] === results[5] &&
      results[5] !== square['blank']
    ) {
      alert('The winner is ' + results[0])
    } else if (
      results[6] === results[7] &&
      results[7] === results[8] &&
      results[8] !== square['blank']
    ) {
      alert('The winner is ' + results[0])
    } else if (
      results[0] === results[3] &&
      results[3] === results[6] &&
      results[6] !== square['blank']
    ) {
      alert('The winner is ' + results[0])
    } else if (
      results[1] === results[4] &&
      results[4] === results[7] &&
      results[7] !== square['blank']
    ) {
      alert('The winner is ' + results[0])
    } else if (
      results[2] === results[5] &&
      results[5] === results[8] &&
      results[8] !== square['blank']
    ) {
      alert('The winner is ' + results[0])
    } else if (
      results[0] === results[4] &&
      results[4] === results[8] &&
      results[8] !== square['blank']
    ) {
      alert('The winner is ' + results[0])
    } else if (
      results[2] === results[4] &&
      results[4] === results[6] &&
      results[6] !== square['blank']
    ) {
      alert('The winner is ' + results[0])
    } else {
      console.log('hello,hello, hello')
    }
  }

  const gameContextValue = {
    handleTurn,
  }

  return (
    <GameContext.Provider value={gameContextValue}>
      <SuperBoard
        gameboard={gameBoard}
        activeBoard={activeBoard}
        results={results}
      />
    </GameContext.Provider>
  )
}

export default App
