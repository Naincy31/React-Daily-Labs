import React, { useMemo, useState } from 'react'

const QuizBuilder = () => {

    const questions = [
        {
            question: "India's capital?",
            options: ["Mumbai", "Lucknow", "Delhi"],
            answer: "Delhi"
        },
        {
            question: "The country behind COVID?",
            options: ["Pakistan", "China", "Japan"],
            answer: "China"
        },
        {
            question: "What is Naincy's last name",
            options: ["Mathur", "Rathore", "Singhania"],
            answer: "Rathore"
        },
        {
            question: "Where do rich people poop?",
            options: ["Commode", "Floor", "Sauna"],
            answer: "Sauna"
        }
    ]

    const totalQuestions = useMemo(() => questions.length, [questions])

    const [quesIndex, setQuesIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [answer, setAnswer] = useState(null)
    const [feedback, setFeedback] = useState(null)
    const [completeQuiz, setCompleteQuiz] = useState(false)

    const handleChange = (e) => {
        setAnswer(e.target.value)
    }

    const handleSubmit = () => {
        if(answer === questions[quesIndex].answer){
            setFeedback("Your answer is correct!")
            setScore((prev) => prev + 1)
        } else {
            setFeedback("Incorrect answer")
        }
        if(quesIndex === totalQuestions - 1){
            setCompleteQuiz(true)
        } else {
            setQuesIndex((prev) => prev + 1)
            setAnswer(null)
            setFeedback(null)
        }
    }

  return (
    <div>
        <h1>QuizBuilder</h1>
        <p>Question {quesIndex + 1} of {totalQuestions}</p>
        <h3>{questions[quesIndex].question}</h3>
        {questions[quesIndex].options.map((option, index) => (
            <div key={`${option}-${index}`}>
                <input 
                    type="radio"
                    value={option}
                    onChange={handleChange}
                    checked={option === answer}
                    name='answers'
                    id={option} 
                />
                <label htmlFor={option}>{option}</label>
            </div>
        ))}
        <button onClick={handleSubmit} disabled={completeQuiz || answer === null}>Submit</button>
        
        <div id="feedback">
            {quesIndex !== 0 && !completeQuiz && feedback}
        </div>
        <div id="score">
            {
                completeQuiz &&
                `Quiz complete! Your score: ${score} out of ${totalQuestions}`
            }
        </div>

    </div>
  )
}

export default QuizBuilder