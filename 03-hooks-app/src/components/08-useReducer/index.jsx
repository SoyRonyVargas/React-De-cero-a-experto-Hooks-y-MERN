import React, { useReducer , useRef } from 'react'
import TodoList from './TodoList'
import TodoAdd from './TodoAdd'
import reducer from './reducer'

const index = () => {

    const ref = useRef()

    const initialState = [
        {
            id: new Date().getTime(),
            desc: 'Aprender React',
            done: false
        }
    ]

    const [ todos , dispatch ] = useReducer(reducer, initialState)

    const handleSubmit = (e) => {

        e.preventDefault()

        const newTodo = {
            id: new Date().getTime(),
            desc: ref.current.value,
            done: false
        }

        ref.current.value = ''

        const action = {
            type: 'ADD_TODO',
            payload: newTodo
        }

        dispatch(action)

    }

    const handleDelete = ( id ) => {

        const action = {
            type: 'delete',
            payload: id
        }

        dispatch(action)

    }

    return (
        <div>
            <h1> Todos - {todos.length} </h1>
            <hr />
            <main className='row '>
                
                <TodoList
                    handleDelete={handleDelete}
                    todos={todos}
                />

                <TodoAdd
                    handleSubmit={handleSubmit}
                    ref={ref}
                />

            </main>
        </div>
    )

}

export default index