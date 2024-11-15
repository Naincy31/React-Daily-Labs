import { useEffect, useState } from "react"

const DiceGame = () => {
    const [ playerWonName, setPlayerWonName ] = useState('')
    const [ playersDice, setPlayersDice ] = useState({
        player1: Math.floor(Math.random()*6) + 1, 
        player2: Math.floor(Math.random()*6) + 1
    })

    const renderDots = (num) => {
        return [...Array(num)].map((_, index) => <div className="dot" key={index}></div>)
    }

    const determineWinner = (dice) => {
        if(dice.player1 > dice.player2){
            setPlayerWonName('Player 1')
        } else if(dice.player1 < dice.player2){
            setPlayerWonName('Player 2')
        } else {
            setPlayerWonName('Nobody')
        }
    }

    useEffect(() => {
        determineWinner(playersDice);
    }, [])

    const handleClick = () => {

        const newRolls = {
            player1: Math.floor(Math.random()*6) + 1, 
            player2: Math.floor(Math.random()*6) + 1
        }

        setPlayersDice(newRolls)
        determineWinner(newRolls)
    }
  
    return (
    <div className="dice-game">
        <h2>{playerWonName} Wins!</h2>
        <div className="game">
            <div className="player-1">
                <h3>Player 1</h3>
                <div className={`dice dice-${playersDice.player1}`}>
                    {renderDots(playersDice.player1)}
                </div>
            </div>
            <div className="player-2">
                <h3>Player 2</h3>
                <div className={`dice dice-${playersDice.player2}`}>
                    {renderDots(playersDice.player2)}
                </div>
            </div>
        </div>
        <button onClick={handleClick}>Play</button>
    </div>
  )
}

export default DiceGame