import React, { Fragment, useState } from 'react'
import InputText from './InputText';

const TodoItem = ({todo, deleteTodo,markComplete,id,handleEditing }) => {
    const [isShow, setIsShow] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [content, setContent] = useState('');

    const todoItemStyle = {
        color: todo.completed ? 'blue' : 'black',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 18,
    }


    const onHandleChange = () => {
        markComplete(todo.id);
        setIsShow(!isShow)
    }

    const onHandleSubmit = e => {
        e.preventDefault();
        setIsEditing(false);
            handleEditing(content, id);
            setContent("");
    }

    const onHandleEditing = (todo) => {
        if(isEditing){
            return (
                <div className="form-input">
                    <form onSubmit={onHandleSubmit}>
                        <InputText content={content} setContent={setContent} />
                    </form>
                </div>
            )
        }else{
            return (
                <div style={{ display: 'flex', justifyContent: 'space-between', flex: 1}}>
                    <p style={todoItemStyle} onClick={onHandleChange} >{todo.content}</p>
                    {todo.completed ? '' : <img onClick={() => markComplete(todo.id)} src="https://img.icons8.com/officexs/16/000000/checkmark.png"/>}
                </div>
            ) 
        }
    }


    return (
        <Fragment>

        
            <div className='todo--item'>
                {/* <div style={{ display: 'flex', justifyContent: 'space-between', flex: 1}}>
                    <p style={todoItemStyle} onClick={onHandleChange} >{todo.content}</p>
                    {todo.completed ? '' : <img onClick={() => markComplete(todo.id)} src="https://img.icons8.com/officexs/16/000000/checkmark.png"/>}
                </div> */}
                {onHandleEditing(todo)}
            
            <div className="todo-btn">
                <img onClick={() => deleteTodo(todo.id)} src="https://img.icons8.com/material-sharp/24/000000/delete-sign.png"/>
                <form>
                    <img onClick={() => setIsEditing(!isEditing)} src="https://img.icons8.com/windows/32/000000/edit-file.png"/>
                </form>
            </div>
            </div> 
        
        </Fragment>
    )
}




export default TodoItem
