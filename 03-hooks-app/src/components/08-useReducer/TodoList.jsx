import TodoListItem from './TodoListItem'
import React from 'react'

const TodoList = ({ todos, handleDelete }) => (
    <ul className='list-group list-group-flush col'>
        {
            todos.map((todo, index) => (
                <TodoListItem
                    key={index}
                    handleDelete={handleDelete}
                    index={index}
                    {...todo}
                />
            ))
        }
    </ul>
)

export default TodoList