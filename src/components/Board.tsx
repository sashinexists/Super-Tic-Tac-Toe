import React from 'react'
import Square from './Square'
import square from '../shared/Square'

interface Props {
    board:Array<square>
    boardNumber:number,
    isActive: Boolean,
    winner: square
}

export default function Board(props:Props) {
    const {boardNumber, board, isActive, winner} = props;
    return (
        <div className={"board board-"+ boardNumber +" board-active__"+(isActive&&(winner===square["blank"]))+" board-winner__"+winner}>
            {board.map((value:square,i) => {
                return <Square key={boardNumber+"-"+i} board={boardNumber} position={i} value={value} />
            })}
        </div>
    )
}
