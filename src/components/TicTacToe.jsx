import {useState} from 'react'

const size = 3
const winPatterns = [
    [0, 1, 2], //first row
    [3, 4, 5], //second row
    [6, 7, 8], //third row
    [0, 4, 8], //diagonal l to r
    [2, 4, 6], //diagonal r to l
    [0, 3, 6], //first col
    [1, 4, 7], //second col
    [2, 5, 8], //third col
]

const TicTacToe = () => {
    const [squares, setSquares] = useState(Array(size * size).fill(null))
    const [gameStatus, setGameStatus] = useState("Playing")
    const [playersStatus, setPlayersStatus] = useState({x: 0, o: 0})
    const [drawStatus, setDrawStatus] = useState(0)
    const [currentPlayer, setCurrentPlayer] = useState('X')
    
    const handleClick = (index) => {
        if(squares[index] || gameStatus !== "Playing") return;

        const updatedSquares = [...squares]
        updatedSquares[index] = currentPlayer
        setSquares(updatedSquares)

        const winner = checkWinner(updatedSquares, currentPlayer)
        if (winner){
            setGameStatus(`${currentPlayer} Wins!`)
            setPlayersStatus((prev) => ({
                ...prev,
                [currentPlayer.toLowerCase()]: prev[currentPlayer.toLowerCase()] + 1
            }))
        } else if (updatedSquares.every(square => square)){
            setGameStatus('Draw')
            setDrawStatus((prev) => prev + 1)
        } else {
            setCurrentPlayer((prev) => (prev === 'X' ? 'O' : 'X'))
        }
    }

    const checkWinner = (updatedSquares, player) => {
        return winPatterns.some(pattern => {
            return pattern.every((index) => updatedSquares[index] === player)
        })
    }

    const handleRematch = () => {
        setGameStatus('Playing')
        setSquares(Array(size * size).fill(null))
        setCurrentPlayer('X')
    }

  return (
    <div className='tic-tac-toe'>
        <h3>Status: {gameStatus}</h3>
        <div className="status-container">
            <div className="x-container">
                <h3>X</h3>
                <h3>{playersStatus.x} Wins</h3>
            </div>
            <div className="o-container">
                <h3>O</h3>
                <h3>{playersStatus.o} Wins</h3>
            </div>
            <div className="draw">
                <h3>=</h3>
                <h3>{drawStatus} Draws</h3>
            </div>
        </div>  
        <div className="game-container">
            {squares.map((square, index) => 
            (
                <div 
                    className="square" 
                    key={index} 
                    onClick={() => handleClick(index)}
                >
                    {square}
                </div>
            ))}
        </div>
        <button className="rematch" onClick={handleRematch}>Rematch</button>
    </div>
  )
}

export default TicTacToe