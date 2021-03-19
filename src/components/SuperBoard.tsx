import React from 'react'
import BoardComponent from './Board'
import { Board } from '../shared/Board'
import selectBoard from '../shared/SelectBoard'

interface Props {
    gameboard: Array<Board>,
    activeBoard: selectBoard
    gameOvers: Array<number>
}

export default function SuperBoard(props:Props) {
    const { gameboard, activeBoard, gameOvers } = props;
    return (
        <main className="game">
            {gameboard.map((board:Board, i:number) => {
                return <BoardComponent key={i} boardNumber={i} board={board.squares} isOver={gameOvers.some((gameOver)=> gameOver ===i)} isActive={activeBoard=== 9 || activeBoard===i}/>
            })}
        </main>
    )
}
