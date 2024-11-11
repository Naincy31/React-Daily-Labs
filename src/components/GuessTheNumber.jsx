import { useEffect, useState } from "react"

const GuessTheNumber = () => {
    const theNumber = 85
    const initialGuessLimit = 6
    const [ inputValue, setInputValue ] = useState("")
    const [ text, setText ] = useState(null)
    const [ guesses , setGuesses ] = useState([])
    const [ winStatus, setWinStatus] = useState(false)
    const [ guessLimit, setGuessLimit ] = useState(initialGuessLimit)
    const [ isGameActive, setIsGameActive ] = useState(true)

    useEffect(() => {
        if( guessLimit === 0 || winStatus){
            setIsGameActive(false)
        } else {
            setIsGameActive(true)
        }
    }, [guessLimit, winStatus])

    const handleSubmit = () => {
        if( Number(inputValue) > theNumber){
            setText("Too high!")
        } else if( Number(inputValue) < theNumber){
            setText("Too low!")
        } else{
            setText("You got it! Congrats")
            setWinStatus(true)
        }
        setGuessLimit( prevLimit => prevLimit - 1)
        setGuesses([...guesses, inputValue])
        setInputValue("")

        if(guessLimit - 1 === 0 && !winStatus){
            setText("Guess limit over! Start a new game")
        }

    }

    const handleStart = () => {
        setText(null)
        setGuesses([])
        setWinStatus(false)
        setGuessLimit(initialGuessLimit)
        setInputValue("")
    }

  return (
    <div className="Guess-Number">
        <h1>Enter a guess between 0 to 100</h1>
        <input type="number" min={0} max={100} placeholder="Enter a number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} disabled={!isGameActive}/>
        <div className="buttons">
            <button onClick={handleSubmit} disabled={!isGameActive}>Submit</button>
            <button onClick={handleStart} disabled={isGameActive}>Start a game</button>
        </div>
        {text && 
            <div>
                <p>{text}</p>
                <p>Your guesses: {guesses.join(', ')}</p>
                <p>Guesses remaining: {guessLimit}</p>
            </div>
        }
    </div>
  )
}

export default GuessTheNumber