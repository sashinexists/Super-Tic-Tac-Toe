import React, { useContext } from 'react'
import { square, BoardContext } from './App'

interface Props {
    position:number,
    value: square
}
export default function Square(props:Props) {
    const { ...handleTurn } = useContext(BoardContext);
    const { position, value } = props;
    
    return (
        <div onClick={()=>handleTurn.handleTurn(position)} className={"square square-"+position.toString()+" square-"+value.toString()}>
            <span className={value+" square__symbol square__symbol-"+value}>{value}</span>
        </div>
    )
}