import { useEffect, useState } from "react"
import questions from "../data/accordion-data"

const Accordion = () => {
    const [checkboxValue, setCheckboxValue] = useState(false)
    const [openIndexes, setOpenIndexes] = useState([])

    const handleAccordion = (index) => {
        if(checkboxValue){

            setOpenIndexes((prev) => 
                prev.includes(index) 
                    ? prev.filter((i) => i !== index) 
                    : [...prev, index]
            )

        } else {
            setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]))
        }
        
    }

    useEffect(() => {
        setOpenIndexes([])
    }, [checkboxValue])

  return (
    <div className="accordion-app">
        <div className="accordion-checkbox">
            <label htmlFor="checkbox">Is multiple open accordion allowed?</label>
            <input type="checkbox" name="checkbox" id="checkbox" checked={checkboxValue} onChange={() => setCheckboxValue(!checkboxValue)}/>
        </div>
        <div className="accordion-container">
            {questions.map((question, index) => (
                <div key={index} className="accordion" id={question.id}>
                    <div className="accordion-header">
                        <h4>{question.title}</h4>
                        <button className="handle-info-icon" onClick={() => handleAccordion(index)}>{openIndexes.includes(index) ? "-" : "+"}</button>
                    </div>
                    {openIndexes.includes(index) && (
                        <div className="accordion-info">
                            <p>{question.info}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    </div>
  )
}

export default Accordion