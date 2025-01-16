import {useState, useMemo, useEffect} from 'react'

const TicTacToe = () => {
    
    const [gridSize, setGridSize] = useState(null)
    const [squares, setSquares] = useState([])
    const [gameStatus, setGameStatus] = useState(null)
    const [playersStatus, setPlayersStatus] = useState({x: 0, o: 0})
    const [drawStatus, setDrawStatus] = useState(0)
    const [currentPlayer, setCurrentPlayer] = useState('X')    

    const winPatterns = useMemo(() => {
        if(!gridSize) return []
        const patterns = []

        //row patterns
        for(let i = 0; i < gridSize; i++){
            patterns.push(Array.from({length: gridSize}, (_, j) => i * gridSize + j))
        }

        //column patterns
        for(let i = 0; i < gridSize; i++){
            patterns.push(Array.from({length: gridSize}, (_, j) => j * gridSize + i))
        }

        //diagonal from l to r
        patterns.push(Array.from({length: gridSize}, (_, i) => i * (gridSize + 1)))

        //diagonal from r to l
        patterns.push(Array.from({length: gridSize}, (_, i) => (i + 1) * (gridSize - 1)))

        return patterns
    }, [gridSize])

    useEffect(() => {
        if(gridSize) {
            setSquares(Array(gridSize * gridSize).fill(null))
            handleRematch()
        }
    }, [gridSize])

    useEffect(() => {
        setGameStatus(`${currentPlayer} to move`)
    }, [currentPlayer])
    
    const handleClick = (index) => {
        if(squares[index] || !gameStatus.includes('to move')) return;

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
        setSquares(Array(gridSize * gridSize).fill(null))
        setCurrentPlayer('X')
        setGameStatus(`X to move`)
    }

  return (
    <>
        {!gridSize ? (
            <div className='grid-size-container'>
                <h3>Choose a grid size: </h3>
                <button onClick={() => setGridSize(3)}>3x3</button>
                <button onClick={() => setGridSize(4)}>4x4</button>
                <button onClick={() => setGridSize(5)}>5x5</button>
            </div>
            ) : (
                <div className='tic-tac-toe'>
                    <h3>Status: {gameStatus && gameStatus}</h3>
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
                    <div className="game-container" style={{display: 'grid', gridTemplateColumns: `repeat(${gridSize}, 1fr)`, width: `${gridSize * 100}px`}}>
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
                    <div className="grid-size-change">
                        <h3>Want to change the grid size?</h3>
                        <button onClick={() => setGridSize(3)}>3x3</button>
                        <button onClick={() => setGridSize(4)}>4x4</button>
                        <button onClick={() => setGridSize(5)}>5x5</button>
                    </div>
                </div>
            )
        
        }
    </>
    
  )
}

export default TicTacToe