import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const TodoForm = ({handleTodoSubmit}) => {

    const [title, setTitle] = useState('')

    const onTitleChange = e => {
        setTitle(e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if(title !== ""){
            handleTodoSubmit(
                {
                    id: uuidv4(),
                    content: title,
                    completed: false
                }
            );
            setTitle('');
        }
        
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input type="text" name="content" placeholder="Add new task in here" value={title} onChange={onTitleChange} required/>
            <button type="submit" className="btn--Add"> + </button>
        </form>
    )
}

export default TodoForm
