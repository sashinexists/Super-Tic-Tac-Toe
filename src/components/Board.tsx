import React from 'react'
import Square from './Square'
import square from '../shared/Square'

interface Props {
    board:Array<square>
    boardNumber:number,
    isActive: Boolean
}

export default function Board(props:Props) {
    const {boardNumber, board, isActive} = props;
    return (
        <div className={"board board-"+ boardNumber +" board-active__"+isActive}>
            {board.map((value:square,i) => {
                return <Square key={boardNumber+"-"+i} board={boardNumber} position={i} value={value} />
            })}
        </div>
    )
}
