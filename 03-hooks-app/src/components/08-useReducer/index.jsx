import React, { useReducer , useRef } from 'react'
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

    return (
        <div>
            <h1> Todos - {todos.length} </h1>
            <hr />
            <main className='row '>
                <ul className='list-group list-group-flush col'>
                    {
                        todos.map((todo, index) => (
                            <li key={todo.id} className={"d-flex align-items-center mb-2"}>
                                <p className='mb-0 mx-3'>
                                    {index + 1} - {todo.desc}
                                </p>
                                <div className='button-group btn-group align'>
                                    {/* <button className='btn btn-success'>
                                        <i className='fa fa-check'></i>
                                        Agregar
                                    </button> */}
                                    <button className='btn btn-danger btn-small btn-sm'>
                                        Eliminar
                                    </button>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                <div className='col'>
                    <h3>
                        Agregar Todo
                    </h3>
                    <form onSubmit={handleSubmit}>
                        <div class="mb-3">
                            <textarea 
                                className="form-control"
                                rows={3}
                                defaultValue={""} 
                                ref={ref}
                            />
                        </div>

                        <button type='submit' className='btn btn-primary btn-small btn-sm'>
                            Agregar
                        </button>
                    </form>
                </div>
            </main>
        </div>
    )

}

export default index