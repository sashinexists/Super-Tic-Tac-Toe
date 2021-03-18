import React from 'react'
import Square from './Square'
import { square } from './App'

interface Props {
    board:Array<square>
}

export default function Board(props:Props) {
    const {board} = props;
    return (
        <div className="board">
            {board.map((value:square,i) => {
                return <Square key={i} position={i} value={value} />
            })}
        </div>
    )
}
