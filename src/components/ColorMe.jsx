import { useState } from "react"

const ColorMe = () => {
    const [inputValue, setInputValue] = useState('')

    const handleClick = () => {
        const circles = document.querySelectorAll('.circles p')
        
        circles.forEach(circle => circle.style.backgroundColor = '#f0f0f0')

        const circleToColor = Array.from(circles).find(
            p => p.innerText === inputValue
        )

        if (circleToColor) {
            circleToColor.style.backgroundColor = 'green';
        }

        setInputValue('')
    }

  return (
    <div className="color-me">
        <div className="circles">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
        </div>
        <div className="input-button">
            <input type="number" min={1} max={9} placeholder="Enter Number" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <button onClick={handleClick}>Color Me</button>
        </div>
    </div>
  )
}

export default ColorMe