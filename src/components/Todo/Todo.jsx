import React, { useCallback, useState } from 'react'
import TodoList from './TodoList'

const Todo = () => {
    const [inputText, setInputText] = useState("")
    const [todoList, setTodoList] = useState([])
    const [editStatus, setEditStatus] = useState(false)
    const [editIndex, setEditIndex] = useState(null)

    const handleCancel = useCallback(() => {
        setInputText("")
        setEditStatus(false)
        setEditIndex(null)
    }, [inputText])

    const handleSubmit = useCallback(() => {
        if(inputText.trim() !== ""){
            setTodoList((prev) => [...prev, inputText])
            setInputText("")
        }
    }, [inputText])

    const handleUpdate = useCallback(() => {
        if(inputText.trim() !== "" && editIndex != null){
            setTodoList((prev) => prev.map((item, index) => ( index === editIndex ? inputText : item)))
            setInputText("")
            setEditStatus(false)
            setEditIndex(null)
        }
    }, [inputText, editIndex])

  return (
    <div className='todo'>
        <div className='input'>
            <input type="text" placeholder='Enter your todo' value={inputText} onChange={(e) => setInputText(e.target.value)}/>
        </div>
        <div className="buttons">
            <button className='submit' onClick={editStatus ? handleUpdate : handleSubmit}>{editStatus ? 'Update' : 'Submit'}</button>
            <button className="cancel" onClick={handleCancel}>Cancel</button>
        </div>
        <p style={{fontStyle: 'italic'}}>Double click on todo to toggle completion status</p>
        {todoList.length !== 0 && <TodoList todoList = {todoList} setEditStatus = {setEditStatus} setTodoList = {setTodoList} setInputText = {setInputText} inputText = {inputText} setEditIndex = {setEditIndex}/>}
    </div>
  )
}

export default Todo