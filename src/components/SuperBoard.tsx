import React from 'react'
import BoardComponent from './Board'
import { Board } from '../shared/Board'
import selectBoard from '../shared/SelectBoard'
import square from '../shared/Square'

interface Props {
    gameboard: Array<Board>,
    activeBoard: selectBoard
    results: Array<square>
}

export default function SuperBoard(props:Props) {
    const { gameboard, activeBoard, results } = props;
    return (
        <main className="game">
            {gameboard.map((board:Board, i:number) => {
                return <BoardComponent key={i} boardNumber={i} board={board.squares} isOver={results[i]!==square["blank"]} isActive={activeBoard=== 9 || activeBoard===i}/>
            })}
        </main>
    )
}
