import React from 'react'

import Checkbox from '@material-ui/core/Checkbox'
import './TodoItem.css'

const TodoItem = ({name, done, id}) => {
    const handleCheck = () => {

    }
    return (
        <div className="todoItem">
            <Checkbox 
                checked={done}
                color='primary'
                onChange={handleCheck()}
                inputProps={{'aria-label': 'secondary checkbox'}}
            />
            <p className={done && 'todoItem--done'}>{name}</p>
        </div>
    )
}

export default TodoItem 
