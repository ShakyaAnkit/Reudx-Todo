import React from 'react'

import Checkbox from '@material-ui/core/Checkbox'
import './TodoItem.css'
import { useDispatch } from 'react-redux'
import { handleCheck } from '../features/todoSlice'
import { removeTodo } from '../features/todoSlice'

const TodoItem = ({name, done, id}) => {
    const dispatch = useDispatch()

    const handleCheckbox= () =>{
        console.log(`change on ${id} - ${done}`)
        dispatch(handleCheck(id))
    }

    const handleTodo = () => {
        console.log(`delete ${id}`)
        dispatch(removeTodo(id))
    }

    return (
        <div className="todoItem">
            <Checkbox 
                checked={done}
                color='primary'
                onChange={handleCheckbox}
                inputProps={{'aria-label': 'secondary checkbox'}}
            />
            <p className={done ? 'todoItem--done': 'todoItem--todo'}>{name}- {done === true?'yes':'no'} -  {id}</p>
            <button className="todoItem__delete" onClick={ handleTodo }>Delete</button>
        </div>
    )
}

export default TodoItem 
