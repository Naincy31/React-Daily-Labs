import { useState } from "react"

const BMICalculator = () => {
    const [inputfields, setInputFields] = useState({height: '', weight: ''})
    const [ BMI, setBMI ] = useState('')

    const handleClick = () => {
        setBMI('')
        const getBMI = inputfields.weight / Math.pow(inputfields.height / 100, 2)
        setBMI(getBMI.toFixed(2))
    }

  return (
    <div className="bmi-calc">
        <div className="inputs">
            <label>Height (cm):</label>
            <input 
                type="number" 
                min={0} 
                placeholder="Enter height" 
                value={inputfields.height}
                onChange={(e) => setInputFields((prev) => ({...prev, height: e.target.value}))}
            />
        </div>
        <div className="inputs">
            <label>Weight (kg):</label>
            <input 
                type="number" 
                min={0} 
                placeholder="Enter weight" 
                value={inputfields.weight} 
                onChange={(e) => setInputFields((prev) => ({...prev, weight: e.target.value}))}
            />
        </div>
        <button onClick={handleClick}>Calculate BMI</button>
        <h3>Your BMI: {BMI}</h3>
    </div>
  )
}

export default BMICalculator