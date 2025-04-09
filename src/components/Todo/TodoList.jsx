import React, { useState } from 'react'

const TodoList = ({todoList, setEditStatus, setTodoList, setInputText, inputText, setEditIndex}) => {

    const [completedItems, setCompletedItems] = useState([])

    const handleEdit = (index) => {
        setEditStatus(true)
        setInputText(todoList[index])
        setEditIndex(index)
    }

    const handleDelete = (index) => {
        if(inputText === todoList[index]){
            setInputText("")
        }
        setEditStatus(false)
        setTodoList((prev) => prev.filter((_, i) => i !== index))

        setCompletedItems((prev) =>
            prev
                .filter((i) => i !== index) 
                .map((i) => (i > index ? i - 1 : i))
        )
    }

    const toggleCompletion = (index) => {
        setCompletedItems((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index) 
                : [...prev, index]
        )
    }

  return (
    <div className='todo-list'>
        {todoList.map((item, index) => (
            <div key={index} className='todo-item'>
                <p onDoubleClick={() => toggleCompletion(index)} style={completedItems.includes(index)
                                ? { fontStyle: 'italic', textDecoration: 'line-through' }
                                : {}}>{item}</p>
                <div className="todo-list-buttons">
                    <button onClick={() => handleEdit(index)} className='edit'>Edit</button>
                    <button onClick={() => handleDelete(index)} className='delete'>Delete</button>
                </div>
            </div>
        ))}
    </div>
  )
}

export default TodoList