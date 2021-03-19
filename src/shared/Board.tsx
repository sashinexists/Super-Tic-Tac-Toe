import square from './Square'

export interface Board {
  squares: Array<square>
  winner: square
}

const newBoard = (): Board => ({
  squares: new Array(9).fill(square['blank']),
  winner: square['blank'],
})

export default newBoard
