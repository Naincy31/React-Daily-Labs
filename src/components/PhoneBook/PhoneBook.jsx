import { useReducer, useState } from 'react'

const PhoneBook = () => {
    const initialState = {
        userFirstName: 'Naincy',
        userLastName: 'Rathore',
        userNumber: '7767049429'
    }

    const formReducer = (state, action) => {
        switch(action.type) {
            case "RESET":
                return { userFirstName: "", userLastName: "", userNumber: ""}
            case "UPDATE":
                return {...state, [action.field]: action.payload};
            default:
                return state;
        }
    }

    const [formState, dispatch] = useReducer(formReducer, initialState)

    const [entries, setEntries] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();

        setEntries((prev) => {
            const updated = [...prev, formState]
            return updated.sort((a, b) => a.userLastName.localeCompare(b.userLastName)
)
        })

        dispatch({type: "RESET"})

    }

  return (
    <>
        <div className="form-container" style={{width: '300px', margin: '0 auto'}}>
            <form onSubmit={handleSubmit}  style={{display: 'flex', flexDirection: 'column'}}>
                <label htmlFor="firstName">First Name: </label>
                <input type="text" id="firstName" required value={formState.userFirstName} onChange={(e) => dispatch({type: 'UPDATE', field: "userFirstName", payload: e.target.value})}/>

                <label htmlFor="lastName">Last Name: </label>
                <input type="text" id="lastName" required value={formState.userLastName} onChange={(e) => dispatch({type: 'UPDATE', field: "userLastName", payload: e.target.value})}/>

                <label htmlFor="phone">Phone Number:  </label>
                <input type="tel" id="phone" required value={formState.userNumber} onChange={(e) => dispatch({type: 'UPDATE', field: "userNumber", payload: e.target.value})}/>
                
                <button type="submit">Submit</button>
            </form>
        </div>

        <div style={{ marginTop: '20px' }}>
  <table border="1" width="100%">
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Phone Number</th>
      </tr>
    </thead>
    <tbody>
      {entries.map((entry, index) => (
        <tr key={index}>
          <td>{entry.userFirstName}</td>
          <td>{entry.userLastName}</td>
          <td>{entry.userNumber}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

        
    </>
  )
}

export default PhoneBook