import React from 'react'

const TodoListItem = ({ id , index , desc , handleDelete }) => {
    return (
        <li key={id} className={"d-flex align-items-center mb-2"}>
            <p className='todo_paragraph mb-0 mx-3'>
                {index + 1} - {desc}
            </p>
            <div className='button-group btn-group align'>
                {/* <button className='btn btn-success'>
                                        <i className='fa fa-check'></i>
                                        Agregar
                                    </button> */}
                <button id='delete_todo' onClick={ () => handleDelete(id) } className='btn btn-danger btn-small btn-sm'>
                    Eliminar
                </button>
            </div>
        </li>
    )
}

export default TodoListItem