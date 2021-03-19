import React, { useContext } from 'react'
import square from '../shared/Square'
import { GameContext } from './App'

interface Props {
    position:number,
    value: square,
    board: number
}
export default function Square(props:Props) {
    const { handleTurn } = useContext(GameContext);
    const { board, position, value } = props;
    return (
        <div onClick={()=>handleTurn(board, position)} className={"square square-"+position.toString()+" square-"+value.toString()}>
            <span className={value+" square__symbol square__symbol-"+value}>{value}</span>
        </div>
    )
}