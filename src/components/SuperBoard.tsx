import React from 'react'
import BoardComponent from './Board'
import { Board } from '../shared/Board'
import { Game } from '../shared/Game'
import selectBoard from '../shared/SelectBoard'

interface Props {
    gameboard: Array<Board>,
    activeBoard: selectBoard
}

export default function SuperBoard(props:Props) {
    const { gameboard, activeBoard } = props;
    return (
        <main className="game">
            {gameboard.map((board:Board, i:number) => {
                return <BoardComponent key={i} boardNumber={i} board={board.squares} isActive={activeBoard=== 9 || activeBoard===i}/>
            })}
        </main>
    )
}
