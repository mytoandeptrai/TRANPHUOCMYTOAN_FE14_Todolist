import React from 'react'
import TodoItem from './TodoItem';

const TodoList = ({ todos,deleteTodo,markComplete,handleEditing }) => {
    return (
        <div className='todo-list'>
            {
                todos.map(todo => {
                    return (
                        <TodoItem key={todo.id} id={todo.id} todo={todo} deleteTodo={deleteTodo} markComplete={markComplete} handleEditing={handleEditing} />
                    )
                })
            }
        </div>
    )
}

export default TodoList
