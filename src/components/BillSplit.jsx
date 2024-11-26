import { useEffect, useState } from "react"

const BillSplit = () => {
    const [ amount, setAmount ] = useState(null)

    const handleChange = (e) => {
        setAmount(parseFloat(e.target.value))
        console.log('handleChange: ',amount);
    }

    const enableContainers = () => {
        const tipButtons = document.querySelectorAll('.tip-button')
        tipButtons.forEach((btn) => {
            btn.disabled = false
            btn.classList.add('true')
        })
    }

    useEffect(() => {
        console.log('useEffect',amount);
        
        if(amount > 0){
            enableContainers()
        }
    }, [amount])

  return (
    <div className="bill-split-container">
        <div id="input-bill">
            <label htmlFor="amount">Bill</label>
            <div id="input-container">
                <span>₹</span>
                <input type="number" id="amount" name="amount" min={0} onChange={handleChange} value={amount}/>
            </div>
            <div id="tip-container">
                <label htmlFor="tip">Select Tip</label>
                <div id="tip-buttons">
                    <button className="tip-button" disabled>5%</button>
                    <button className="tip-button" disabled>10%</button>
                    <button className="tip-button" disabled>15%</button>
                    <button className="tip-button" disabled>25%</button>
                    <button className="tip-button" disabled>50%</button>
                    <button className="tip-button" disabled>75%</button>
                </div>
            </div>
            <input type="number" placeholder="Custom Tip" id="custom-tip" disabled/>
            <div id="people-container">
                <label htmlFor="people">Number Of People</label>
                <input type="number" placeholder="No of people" id="people" name="people" min={0} disabled/>
            </div>
            <button id="generate" disabled>Generate Bill</button>
        </div>
        <div id="display-bill">
            <div id="tip-amount">
                <p>Tip amount</p>
            </div>
            <div id="total-amount">
                <p>Total</p>
            </div>
            <div id="each-amount">
                <p>Each Person Bill</p>
            </div>
            <button id="reset" disabled>Reset</button>
        </div>
    </div>
  )
}

export default BillSplit