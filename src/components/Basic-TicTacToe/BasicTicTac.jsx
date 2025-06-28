import React, { useState } from 'react'

const BasicTicTac = () => {

    const matches = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    const [currentPlayer, setCurrentPlayer] = useState('X')
    const [board, setBoard] = useState(Array(9).fill(null))
    const [status, setStatus] = useState(null)


    const handleClick = (index) => {
        if(board[index] || status) return;

        const newBoard = [...board]
        newBoard[index] = currentPlayer

        const hasWon = matches.some(match => match.every(i => newBoard[i] === currentPlayer));

        setBoard(newBoard)

        if(hasWon){
            setStatus('Win')
        } else if(newBoard.every((square) => square)){
            setStatus('Draw')
        } else {
            setCurrentPlayer((prev) => prev === 'X' ? 'O' : 'X')
        }
    }

  return (
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', margin: '0 auto', width: '150px'}}>
        {board.map((square, index) => (
            <div 
                key={index}
                style={{border: '1px solid black', width: '50px', height: '50px'}}
                onClick={() => handleClick(index)}
            >
                {square}
            </div>
        ))}
        {status === "Win" &&
            `${currentPlayer} has won`
        }
        {
            status === 'Draw' && 'Draw'
        }
    </div>
  )
}

export default BasicTicTac