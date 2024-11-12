import { useState } from "react"

const TelephoneFormatter = () => {
    const [ telephone, setTelephone ] = useState('')

    const handleChange = (e) => {
        let input = e.target.value.replace(/\D/g, "") //removes non-digit characters
        
        if(input.length > 3 && input.length <=6){
            input = `+(${input.slice(0,3)}) - ${input.slice(3)}`
        } else if (input.length > 6){
            input = `+(${input.slice(0, 3)}) - ${input.slice(3, 10)}`;
        }
        setTelephone(input)
    }

  return (
    <div className="Telephone">
        <h1>Telephone Formatter</h1>
        <input type="text" placeholder="mobile number" value={telephone} onChange={handleChange}/>
        <p>+(123) - 4567890</p>
    </div>
  )
}

export default TelephoneFormatter