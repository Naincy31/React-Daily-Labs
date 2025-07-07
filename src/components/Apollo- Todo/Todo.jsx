import React, { useEffect, useState } from 'react'

const Todo = () => {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState('')
    const [remainingItems, setRemainingItems] = useState(0)
    const [filteredTodos, setFilteredTodos] = useState([])
    
    const handleKeyDown = (e) => {
        if(e.key === 'Enter' && input.trim() !== ''){
            setTodos([...todos, {'id': `${input + Date.now()}`, 'name': input, 'completed': false}])
            setInput('')
        }
    }

    const toggleCompleteStatus = (item_id) => {
        const updatedTodos = todos.map(todo => (
            todo.id === item_id ? {...todo, completed: !todo.completed} : todo
        ))

        setTodos(updatedTodos)
    }

    const deleteTodo = (item_id) => {
        const updatedTodos = todos.filter(todo => todo.id !== item_id)
        setTodos(updatedTodos)
    }

    const showAllTodos = () => {
        setFilteredTodos(todos)
    }
    
    const showActiveTodos = () => {
        const updatedTodos = todos.filter(todo => !todo.completed)
        setFilteredTodos(updatedTodos)
    }

    const showCompletedTodos = () => {
        const updatedTodos = todos.filter(todo => todo.completed)
        setFilteredTodos(updatedTodos)
    }

    const clearCompleted = () => {
        const updatedTodos = todos.filter(todo => !todo.completed)
        setTodos(updatedTodos)
    }

    const toggleSelectAll = () => {
        const allCompleted = todos.every(todo => todo.completed)
        setTodos(todos.map(todo => ({...todo, completed: !allCompleted})))
    }

    useEffect(() => {
       const uncompletedTodos = todos.filter(todo => !todo.completed)
       setRemainingItems(uncompletedTodos.length)
       setFilteredTodos(todos) 
    }, [todos])

  return (
    <div>
        <h1 style={{textTransform: 'lowercase'}}>Todos</h1>
        <div className="todo-container" style={{display: 'flex', flexDirection: 'column'}}>
            <div className="todo-input-container" style={{display: 'flex', gap: '2px'}}>
                {filteredTodos.length > 0 && <div className="select-all" onClick={toggleSelectAll} style={{cursor: 'pointer'}}>&#xf0d7;</div>}
                <div className="todo-input">
                    <input 
                        type="text" 
                        placeholder='What needs to be done?' 
                        style={{border: 'none', padding: '10px'}}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                </div>
            </div>
            <div className="todo-display-container">
                {
                    filteredTodos.length > 0 && (
                        filteredTodos.map((todo, index) => (
                            <div className="todo-item" key={`${todo.name}-${index}`}>
                                <div className='todo-details' style={{display: 'flex', gap: '5px', alignItems: 'center'}}>
                                    <span 
                                        className="todo-checkbox" 
                                        style={{border: todo.completed ? '2px solid green' : '2px solid grey', borderRadius: '50%', height: '15px', width: '15px', margin: '0', cursor: 'pointer', color: 'green', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2px'}}
                                        onClick={() => toggleCompleteStatus(todo.id)}
                                    >
                                        {todo.completed && '✔'}
                                    </span>
                                    <span 
                                        className="todo-text"
                                        style={{textDecoration: todo.completed && 'line-through', color: todo.completed && 'gray'}}
                                    >
                                        {todo.name}
                                    </span>
                                </div>
                                <span 
                                    className='todo-delete-icon' 
                                    onClick={() => deleteTodo(todo.id)}
                                    style={{cursor: 'pointer'}}
                                >
                                    X
                                </span>
                            </div>
                        ))
                    )
                }
            </div>
            <div className="todos-status-container" style={{display: 'flex', gap: '30px'}}>
                {todos.length > 0 && (
                    <>
                        <p>{remainingItems} items left!</p>
                        <div className="todos-status" style={{display: 'flex', gap: '10px'}}>
                            <p className="todo-all" style={{cursor: 'pointer'}} onClick={showAllTodos}>All</p>
                            <p className="todo-active" style={{cursor: 'pointer'}} onClick={showActiveTodos}>Active</p>
                            <p className="todo-completed" style={{cursor: 'pointer'}} onClick={showCompletedTodos}>Completed</p>
                        </div>
                        <p className="todo-clear" style={{cursor: 'pointer'}} onClick={clearCompleted}>Clear completed</p>
                    </>
                )}
            </div>
        </div>
    </div>
  )
}

export default Todo